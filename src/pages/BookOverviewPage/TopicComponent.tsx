import React from 'react';

interface TopicProps {
    TopicName: string
}

const TopicComponent: React.FC<TopicProps> = ({TopicName}) => {
    return (
        <div class="my-10 px-4 sm:px-8 max-w-5xl m-auto">
            <h1 className="text-center font-semibold text-lg">{TopicName}</h1>
            <ul class="border border-gray-200 rounded overflow-hidden shadow-md mt-5">
                <li class="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
                    <a href="/Academy-Frontend/book/title:BookTitle">
                        First Item
                    </a>
                </li>
                <li class="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
                    <a href="/Academy-Frontend/book/title:BookTitle">
                        Second Item
                    </a>
                </li>                <li class="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
                    <a href="/Academy-Frontend/book/title:BookTitle">
                        Third Item
                    </a>
                </li>                <li class="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
                    <a href="/Academy-Frontend/book/title:BookTitle">
                        Fourth Item
                    </a>
                </li>                <li class="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">
                    <a href="/Academy-Frontend/book/title:BookTitle">
                        Fifth Item
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default TopicComponent;
