import React from 'react';
import bookicon from "../../assets/BookIcon.png";

const BookInfoComponent: React.FC = () => {
    return (
        <div className="flex justify-center items-center px-20">
            <div className="flex flex-col justify-center items-center w-1/2 pr-10">
                <div className='my-10 w-2/3 p-6 mb-6 shadow transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer border border-black"'>
                    <img className="" src={bookicon} alt="" />
                    <h3 className="text-center text-md">BookName</h3>
                    <h3 className="text-center text-md">Author</h3>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center w-1/2 pl-10">
                <p className='px-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex fugiat quod voluptas incidunt quo impedit deleniti iusto cumque? Modi qui quo, eligendi eum ab voluptatem ducimus. Nemo corrupti molestiae delectus?</p>
            </div>
        </div>
    );
};

export default BookInfoComponent;
