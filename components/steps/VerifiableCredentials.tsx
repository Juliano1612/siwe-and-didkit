import { SyntheticEvent, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import {
    keyToDID,
    keyToVerificationMethod,
    issueCredential as didkitIssueCredential,
    verifyCredential as didkitVerifyCredential,
    generateEd25519Key
} from '@spruceid/didkit-wasm';
import Button from "../base/Button";
import Loader from "../base/Loader";


type issueVerifiableCredentialProps = {
    signer: any;
};

function IssueVerifiableCredential({ signer }: issueVerifiableCredentialProps) {
    const [loading, setLoading] = useState<boolean>(false);
    const [key, setKey] = useState<string>('');

    const downloadFile = (content: string, filename: string) => {
        const element = document.createElement("a");
        const file = new Blob([content], {
            type: "text/plain"
        });
        element.href = URL.createObjectURL(file);
        element.download = filename;
        document.body.appendChild(element);
        element.click();
    }

    const issueCredential = async () => {
        setLoading(true);
        let did, keyStr;
        if (key === '') {
            keyStr = generateEd25519Key();
            setKey(keyStr);
        } else {
            keyStr = key;
        }
        did = keyToDID("key", keyStr);
        const verificationMethod = await keyToVerificationMethod("key", keyStr);
        const ethereumAddress = await signer.getAddress();
        const date = new Date().toISOString();

        const credential = await didkitIssueCredential(
            JSON.stringify({
                "@context": [
                    "https://www.w3.org/2018/credentials/v1",
                    {
                        ethereumAddress: "https://schema.org/Text"
                    }
                ],
                id: `urn:uuid:${uuidv4()}`,
                type: ["VerifiableCredential", "Address"],
                issuer: did,
                issuanceDate: date,
                credentialSubject: {
                    id: did,
                    ethereumAddress
                },
            }),
            JSON.stringify({
                proofPurpose: "assertionMethod",
                verificationMethod: verificationMethod,
            }),
            keyStr
        );
        setLoading(false);
        const filename = `signed-vc-${date}.json`;
        downloadFile(credential, filename);
    };

    return <>
        <h2 className="mt-2 font-bold">Generate a<br />Verifiable Credential</h2>
        <p className="mt-4">
            These credentials are issued by&nbsp;
            <a
                className="font-bold"
                href="https://spruceid.dev/docs/didkit/"
                target="__blank"
            >
                DIDKit
            </a>
            .
        </p>
        <Button onClick={issueCredential}>
            <div className="inline-flex">
                {loading ? <Loader /> : null}
                ISSUE AND DOWNLOAD
            </div>
        </Button>
    </>
};


function VerifyCredential() {
    const [loading, setLoading] = useState<boolean>(false);
    const [validCredential, setValidCredential] = useState<boolean>();

    const verifyCredential = async (credential: string) => {
        setLoading(true);
        const verifyStr = await didkitVerifyCredential(
            credential,
            JSON.stringify({
                proofPurpose: "assertionMethod",
            })
        );

        const verify = JSON.parse(verifyStr);
        console.log(verify)
        setValidCredential(verify?.errors?.length === 0)
        setLoading(false);
    };

    const readFile = (e: SyntheticEvent) => {
        setValidCredential(undefined);
        e.preventDefault()
        const reader = new FileReader()
        reader.onload = async (e) => {
            const text = (e?.target?.result)
            verifyCredential(`${text}`)
        };
        try {
            reader.readAsText(e.target.files[0])
        } catch (e) {
            console.error(e)
        }
    };

    return <>
        <h2 className="mt-2 font-bold">Verify Credential</h2>
        <div className="m-4">
            <div className="flex items-center justify-center w-full">
                <label
                    className="flex flex-col w-full h-24 border-4 border-white-200 border-dashed rounded-md hover:cursor-pointer">
                    <div className="flex flex-col items-center justify-center pt-7">
                        <p className="inline-flex pt-1 text-sm tracking-wider text-white-400 group-hover:text-white-600 font-bold">
                            {loading ? <Loader /> : null}
                            Click here to browse files
                        </p>
                    </div>
                    <input type="file" className="hidden" onChange={readFile} />
                </label>
            </div>
        </div>
        {
            validCredential !== undefined ?
                validCredential ?
                    <div className="alert bg-green-100 rounded-lg py-5 px-6 mt-3  mb-3 text-base text-green-700 inline-flex items-center w-full alert-dismissible fade show" role="alert">
                        This credential is&nbsp;<strong className="mr-1">valid</strong>
                    </div> :
                    <div className="alert bg-red-100 rounded-lg py-5 px-6 mt-3  mb-3 text-base text-red-700 inline-flex items-center w-full alert-dismissible fade show" role="alert">
                        This credential is&nbsp;<strong className="mr-1">invalid</strong>
                    </div> :
                null
        }
    </>
};



type verifiableCredentialsProps = {
    signer: any;
};

export default function VerifiableCredentials({ signer }: verifiableCredentialsProps) {
    return <div className="grid grid-rows-1 grid-flow-row">
        <IssueVerifiableCredential signer={signer} />
        <hr className="mt-6 mb-6" />
        <VerifyCredential />
    </div>
};