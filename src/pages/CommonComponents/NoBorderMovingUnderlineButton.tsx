import React from 'react';

interface ButtonProps {
    name: string;
    link: string;
}

const NoBorderMovingUnderlineButton: React.FC<ButtonProps> = ({ name, link }) => {
    return (
        <div className="overflow-hidden flex items-center justify-center">
            <a href={link}  className="relative inline-flex items-center justify-center leading-normal no-underline pb-1 text-black font-sans font-bold text-sm uppercase hover:text-neutral-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-neutral-500 transition group">
                {name}
                <svg
                    className="icon icon-tabler icon-tabler-arrow-up-right"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    ><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path
                        d="M17 7l-10 10"></path><path d="M8 7l9 0l0 9"></path>
                    </svg>
                <span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-neutral-700 origin-bottom-right transform transition duration-200 ease-out scale-x-0 group-hover:scale-x-100 group-hover:origin-bottom-left"
                ></span>
            </a>
        </div>
    );
};

export default NoBorderMovingUnderlineButton;
