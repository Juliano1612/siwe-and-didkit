import React, { MouseEventHandler } from 'react';

type buttonProps = {
    children?: React.ReactNode;
    onClick: MouseEventHandler,
};

export default function Button({ children, onClick }: buttonProps) {

    return <button
        className="mt-8 px-8 inline-block rounded-full duration-100 ease-in-out transition-all hover:scale-105 py-2 px-3 bg-transparent border-2 border-solid border-white"
        onClick={onClick}
    >
        <span className="font-inter text-button font-bold uppercase">
            {children}
        </span>
    </button>
}