import React from 'react';


const BookRatingsComponent: React.FC = () => {
    return (
        <div className="flex justify-evenly items-center">
            <div className="flex flex-col justify-center items-center">
                <h3 className='text-xl'># of Pages</h3>
                <h3>100</h3>
            </div>
            <div className="flex flex-col justify-center items-center">
                <h3 className='text-xl'>difficulty rating</h3>
                <h3>5/10</h3>
            </div>
            <div className="flex flex-col justify-center items-center">
                <h3 className='text-xl'>genre</h3>
                <h3>Bible</h3>
            </div>
        </div>
    );
};

export default BookRatingsComponent;
