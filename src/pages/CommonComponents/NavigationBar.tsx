import React from 'react';
import { User } from '../../models/User';

interface NavigationBarProps {
  user: User
}

const NavigationBar: React.FC<NavigationBarProps> = ({ user }) => {
    return (
        <nav className="bg-white border border-gray-200 dark:border-gray-700 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 shadow">
          <div className="container flex flex-wrap justify-between items-center mx-auto">
            {/* Logo */}
            <a href="/Academy-Frontend/" className="flex items-center">
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"> Logo </span>
            </a>
        
            <div
              className="w-full md:block md:w-auto hidden"
              id="mobile-menu"
            >
              <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium items-center">
                <li>
                  <a
                    href="/Academy-Frontend/" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Courses
                  </a>
                </li>
                <li>
                  <a
                    href="/Academy-Frontend/books" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Books
                  </a>
                </li>
                <li>
                  <a
                    href="/Academy-Frontend"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Other Resources
                  </a>
                </li>
                <li>
                  <a
                    href="/Academy-Frontend"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    <div className='flex flex-col items-center justify-center'>
                        <p className='text-xs'>Hello </p>
                        <p className='text-xs'>{user.FirstName} </p>
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