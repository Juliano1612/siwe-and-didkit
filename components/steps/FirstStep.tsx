import { MouseEventHandler } from "react";
import Button from "../base/Button";

type firstStepProps = {
    nextStep: MouseEventHandler;
};

export default function FirstStep({ nextStep }: firstStepProps) {

    return <>
        <h2 className="mt-2 font-bold">Forget your email <br />and password</h2>
        <p className="mt-4">We don't need them.<br/>Your identity is under your control.</p>
        <Button onClick={nextStep}>
            SIGN-IN WITH ETHEREUM
        </Button>
    </>
};