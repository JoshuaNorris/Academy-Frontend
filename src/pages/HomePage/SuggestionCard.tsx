import React from 'react';
import bookicon from "../../assets/BookIcon.png";

interface BookCardProps {
    BookTitle: string;
}

const SuggestionCard: React.FC<BookCardProps> = ({ BookTitle }) => {
    return (
        <article className="p-6 mb-6 shadow transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer border border-black">
            <a
                target="_self"
                href="/book/title:BookTitle"
                className="absolute opacity-0 top-0 right-0 left-0 bottom-0"
            ></a>
            <div className="relative rounded-2xl">
                <img
                    className="h-16 px-10 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                    src={bookicon}
                />
            </div>
            <div className="flex justify-between items-center w-full pb-4 mb-auto">
            </div>
            <h3 className="font-medium text-xl leading-8 text-center">
                <a
                    href="/book/title:BookTitle"
                    className="block relative group-hover:text-red-700 transition-colors duration-200"
                >
                    {BookTitle}
                </a>
            </h3>
        </article>
    );
};

export default SuggestionCard;
