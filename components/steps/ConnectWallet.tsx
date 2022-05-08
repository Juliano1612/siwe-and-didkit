import { MouseEventHandler, useEffect, useState } from "react";
import Button from "../base/Button";
import Loader from "../base/Loader";


type walletUnavailableProps = {
    verifyWalletExtension: MouseEventHandler;
};

function WalletUnavailable({ verifyWalletExtension }: walletUnavailableProps) {
    return <>
        <h2 className="mt-2 font-bold">We don't find a wallet<br />extension installed</h2>
        <p className="mt-4">
            Please, click&nbsp;
            <a
                className="font-bold"
                href="https://metamask.io/download/"
                target="__blank"
            >
                here
            </a><br/>
            to install METAMASK.
        </p>
        <Button onClick={verifyWalletExtension}>
            VERIFY AGAIN
        </Button>
    </>
};


type walletConnectedProps = {
    nextStep: MouseEventHandler;
};

function WalletConnected({ nextStep }: walletConnectedProps) {
    return <>
        <h2 className="mt-2 font-bold">Wallet connected</h2>
        <p className="mt-4">
            You can revoke this permission<br />
            at any time.
        </p>
        <Button onClick={nextStep}>
            NEXT STEP
        </Button>
    </>
};


type requestWalletConnectionProps = {
    loading: boolean;
    connectWallet: MouseEventHandler;
    connectionError: connectionErrorType | undefined;
};

function RequestWalletConnection({ loading, connectionError, connectWallet }: requestWalletConnectionProps) {
    return <>
        <h2 className="mt-2 font-bold">#1 connect to your wallet</h2>
        <p className="mt-4">
            You can revoke this permission<br />
            at any time.
        </p>
        <Button onClick={connectWallet}>
            <div className="inline-flex">
                {loading ? <Loader /> : null}
                CONNECT WALLET
            </div>
        </Button>
        {
            connectionError ?
                <div className="alert bg-red-100 rounded-lg py-5 px-6 mt-3  mb-3 text-base text-red-700 inline-flex items-center w-full alert-dismissible fade show" role="alert">
                    <strong className="mr-1">Error {connectionError.code}:</strong> {connectionError.message}
                </div> :
                null
        }
    </>
};


type connectWalletProps = {
    initializeProcess: Function;
    provider: any;
    nextStep: MouseEventHandler;
};

type connectionErrorType = {
    code: number;
    message: string;
    stack: string;
};

export default function ConnectWallet({ initializeProcess, provider, nextStep }: connectWalletProps) {

    const [loading, setLoading] = useState<boolean>(false);
    const [walletExtensionInstalled, setWalletExtensionInstalled] = useState<boolean>(false);
    const [walletConnected, setWalletConnected] = useState<boolean>(false);
    const [connectionError, setConnectionError] = useState<connectionErrorType>();

    const verifyWalletExtension = () => {
        if (window.ethereum !== undefined) {
            setWalletExtensionInstalled(true);
            initializeProcess();
            return;
        }
        setWalletExtensionInstalled(false);
    };

    const connectWallet = () => {
        setConnectionError(undefined);
        setLoading(true);
        setTimeout(() => {
            provider.send('eth_requestAccounts', [])
                .then((response: string[]) => {
                    console.log(response);
                    setWalletConnected(true);
                })
                .catch((err: connectionErrorType) => {
                    console.error(err);
                    setConnectionError(err);
                })
                .finally(() => {
                    setLoading(false);
                });
        }, 500);
    };


    useEffect(() => {
        verifyWalletExtension();
    }, [""]);

    return !walletExtensionInstalled ?
        <WalletUnavailable verifyWalletExtension={verifyWalletExtension} /> :
        walletConnected ?
            <WalletConnected nextStep={nextStep} /> :
            <RequestWalletConnection
                connectWallet={connectWallet}
                loading={loading}
                connectionError={connectionError}
            />
};