import React from 'react';
import NoBorderMovingUnderlineButton from '../CommonComponents/NoBorderMovingUnderlineButton';


const BookPlansComponent: React.FC = () => {
    return (
        <div className="flex justify-evenly items-center w-screen py-5">
            <div className='flex justify-center items-center p-4 shadow transition duration-300 group transform hover:-translate-y-0.5 hover:shadow-2xl rounded-2xl cursor-pointer border'>
                <NoBorderMovingUnderlineButton name="Month Plan" link="/" />
            </div>
            <div className='flex justify-center items-center p-4 shadow transition duration-300 group transform hover:-translate-y-0.5 hover:shadow-2xl rounded-2xl cursor-pointer border'>
                <NoBorderMovingUnderlineButton name="Semester Plan" link="/" />
            </div>        
        </div>
    );
};

export default BookPlansComponent;
