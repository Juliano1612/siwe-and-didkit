import { useState } from "react";
import { SiweMessage } from 'siwe';
import Button from "../base/Button";
import Loader from "../base/Loader";


type signInProps = {
    signer: any;
    domain: string;
    origin: string;
    nextStep: Function;
};

type signInErrorType = {
    code: number;
    message: string;
    stack: string;
};

export default function SignIn({ signer, domain, origin, nextStep }: signInProps) {

    const [loading, setLoading] = useState<boolean>(false);
    const [signInError, setSignInError] = useState<signInErrorType>();

    const createSiweMessage = (
        address: any,
        statement: any
    ) => {
        const message = new SiweMessage({
            domain,
            address,
            statement,
            uri: origin,
            version: '1',
            chainId: 1
        });
        return message.prepareMessage();
    };

    const signIn = async () => {
        setSignInError(undefined)
        setLoading(true)
        const message = await createSiweMessage(
            await signer.getAddress(), // eth address
            'Sign in with Ethereum to the app.'
        );
        signer.signMessage(message)
            .then((response: any) => {
                console.log(response);
                nextStep();
            })
            .catch((err: signInErrorType) => {
                setSignInError(err)
            })
            .finally(() => {
                setLoading(false)
            });
    };

    return <>
        <h2 className="mt-2 font-bold">Click the Button to <br/>Sign-In with Ethereum</h2>
        {/* <h2 className="mt-2 font-bold">We need your permission<br />to sign-in with Ethereum</h2>
        <p className="mt-4">
            Don't worry, we won't have access<br />
            to your private data
        </p> */}
        <Button onClick={signIn}>
            <div className="inline-flex">
                {loading ? <Loader /> : null}
                SIGN-IN
            </div>
        </Button>
        {
            signInError ?
                <div className="alert bg-red-100 rounded-lg py-5 px-6 mt-3  mb-3 text-base text-red-700 inline-flex items-center w-full alert-dismissible fade show" role="alert">
                    <strong className="mr-1">Error {signInError.code}:</strong> {signInError.message}
                </div> :
                null
        }
    </>
};