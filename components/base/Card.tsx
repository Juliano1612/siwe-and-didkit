import React from 'react';

type CardParams = {
    children?: React.ReactNode;
};

export default function Card({ children }: CardParams) {
    return <div className="card__container w-[400px] w h-[520px] m-auto max-w-full max-h-fit px-8 pt-12 pb-12 flex flex-col justify-center items-center rounded-xl gradient-border-2 shadow-2 border-gradient-209-08-transparent">
        <div className="max-w-full">
            {children}
        </div>
    </div>
}