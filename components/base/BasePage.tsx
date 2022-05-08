import React from 'react';

type basePageProps = {
    navbar?: React.ReactNode;
    children?: React.ReactNode;
};

export default function BasePage({ navbar, children }: basePageProps) {
    return <div className="base-page__wrapper">
        {navbar ?? null}
        <div className="flex flex-col flex-grow justify-end">
            <div className="relative w-full h-full">
                <svg className="fill-current max-w-full	 ml-auto h-128 sm:h-256 lg:h-auto md:h-auto" width="529" height="821" viewBox="0 0 529 821" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M472.952 820.365H89.5024C20.7495 820.365 -22.2428 747.901 12.0466 689.998L203.859 366.959L395.496 43.9195C429.96 -14.1531 515.944 -14.1531 550.408 43.9195L742.22 366.959L933.858 689.998C968.321 747.901 925.329 820.365 856.402 820.365H472.952Z" fill="#151515"></path><g opacity="0.75" filter="url(#filter0_d)"><path d="M540.458 779.574H203.622C143.227 779.574 105.461 716.124 135.582 665.423L304.077 382.567L472.418 99.7103C502.692 48.8614 578.224 48.8614 608.498 99.7103L776.992 382.567L945.334 665.423C975.608 716.124 937.842 779.574 877.294 779.574H540.458Z" fill="url(#paint0_linear)"></path></g><g opacity="0.7" filter="url(#filter1_d)"><path d="M560.968 741.706H303.984C257.906 741.706 229.093 693.279 252.074 654.583L380.624 438.698L509.058 222.813C532.155 184.004 589.781 184.004 612.878 222.813L741.429 438.698L869.862 654.583C892.959 693.279 864.146 741.706 817.952 741.706H560.968Z" fill="url(#paint1_linear)"></path></g><defs><filter id="filter0_d" x="3" y="25.5736" width="957" height="844" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dx="-59" dy="27"></feOffset><feGaussianBlur stdDeviation="31.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.8 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter><filter id="filter1_d" x="147" y="182.706" width="731" height="624" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dx="-59" dy="27"></feOffset><feGaussianBlur stdDeviation="19"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend></filter><linearGradient id="paint0_linear" x1="466.72" y1="171.472" x2="285.393" y2="536.84" gradientUnits="userSpaceOnUse"><stop stopColor="#14ACB6"></stop><stop offset="1" stopColor="#7141D7"></stop></linearGradient><linearGradient id="paint1_linear" x1="501.563" y1="352.724" x2="357.713" y2="606.016" gradientUnits="userSpaceOnUse"><stop stopColor="#26F3A8"></stop><stop offset="1" stopColor="#3376E7"></stop></linearGradient></defs></svg>
                <div className="absolute top-20 sm:top-72 w-full text-center px-4"><svg className="fill-current opacity-40 h-24 absolute left-0 top-4" width="230" height="209" viewBox="0 0 230 209" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M87.7343 15.8838L4.26794 160.861C-7.97379 182.132 7.6066 209 32.0901 209H150.612H166.193H181.773H197.91C222.393 209 237.974 182.132 225.732 160.861L217.942 146.307L210.152 132.873L176.765 74.6583L143.379 16.4435C130.58 -5.38698 99.9761 -5.38698 87.7343 15.8838ZM202.361 119.439L199.579 114.961L202.361 119.439Z" fill="url(#paint03)"></path><defs><linearGradient id="paint03" x1="93.4375" y1="60.6473" x2="37.2039" y2="154.832" gradientUnits="userSpaceOnUse"><stop stopColor="#4C49E4"></stop><stop offset="0.46875" stopColor="#3376E7"></stop><stop offset="1" stopColor="#26F3A8"></stop></linearGradient></defs></svg> <svg className="fill-current opacity-50 h-14 absolute left-10 top-8 rotate-180" width="230" height="209" viewBox="0 0 230 209" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M87.7343 15.8838L4.26794 160.861C-7.97379 182.132 7.6066 209 32.0901 209H150.612H166.193H181.773H197.91C222.393 209 237.974 182.132 225.732 160.861L217.942 146.307L210.152 132.873L176.765 74.6583L143.379 16.4435C130.58 -5.38698 99.9761 -5.38698 87.7343 15.8838ZM202.361 119.439L199.579 114.961L202.361 119.439Z" fill="url(#paint08)"></path><defs><linearGradient id="paint08" x1="81.6822" y1="23.4592" x2="-5.38501" y2="197.911" gradientUnits="userSpaceOnUse"><stop stopColor="#9363F9"></stop><stop offset="1" stopColor="#E55A54"></stop></linearGradient></defs></svg> <svg className="fill-current opacity-60 h-8 absolute -left-8 top-12" width="230" height="209" viewBox="0 0 230 209" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M87.7343 15.8838L4.26794 160.861C-7.97379 182.132 7.6066 209 32.0901 209H150.612H166.193H181.773H197.91C222.393 209 237.974 182.132 225.732 160.861L217.942 146.307L210.152 132.873L176.765 74.6583L143.379 16.4435C130.58 -5.38698 99.9761 -5.38698 87.7343 15.8838ZM202.361 119.439L199.579 114.961L202.361 119.439Z" fill="url(#paint08)"></path><defs><linearGradient id="paint08" x1="81.6822" y1="23.4592" x2="-5.38501" y2="197.911" gradientUnits="userSpaceOnUse"><stop stopColor="#9363F9"></stop><stop offset="1" stopColor="#E55A54"></stop></linearGradient></defs></svg></div>
                <div className="absolute top-24 w-full text-center px-4">
                    {children}
                </div>
            </div>
        </div>
    </div>
}