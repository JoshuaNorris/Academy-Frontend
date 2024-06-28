import React from 'react';
import graphic from "../../assets/graphic.jpeg";

const WelcomeBody: React.FC = () => {
    return (
        <div className="flex justify-center items-center py-6 px-4">
        {/* Welcome heading and bio paragraph */}
        <div className="flex flex-col justify-center items-center w-1/2">
          <h1 className='text-4xl py-4'>Welcome</h1>
          <p className='text-center'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam labore corrupti iure tenetur commodi, iste incidunt sed, repellat sapiente corporis, eaque ab! Omnis molestiae quaerat itaque sequi nihil deserunt consequuntur.</p>
        </div>
        <div className="flex justify-center items-center w-1/2">
          <img className='w-1/2' src={graphic} alt="" />
        </div>
      </div>
    );
};

export default WelcomeBody;