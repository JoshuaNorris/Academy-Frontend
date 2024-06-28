import React from 'react';
import loginfavicon from "../../assets/LoginFavicon.png";


const NavigationBar: React.FC = () => {
    return (
        <nav class="bg-white border border-gray-200 dark:border-gray-700 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 shadow">
          <div class="container flex flex-wrap justify-between items-center mx-auto">
            {/* Logo */}
            <a href="/" class="flex items-center">
              <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"> Logo </span>
            </a>
        
            <div
              class="w-full md:block md:w-auto hidden"
              id="mobile-menu"
            >
              <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium items-center">
                <li>
                  <a
                    href="/" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Courses
                  </a>
                </li>
                <li>
                  <a
                    href="/books" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Books
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Other Resources
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    <div className='flex flex-col items-center justify-center'>
                        <img className='h-3' src={loginfavicon} alt="Login" />
                        <p className='text-xs'>Login </p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
        
          </div>
        </nav>
    );
};

export default NavigationBar;