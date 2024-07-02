import React from 'react';
import NoBorderMovingUnderlineButton from '../CommonComponents/NoBorderMovingUnderlineButton';
const { BASE_URL } = import.meta.env;

const LoginorRegister: React.FC = () => {
    return (
        <div className="flex justify-center items-center py-10 px-4">
            <div className="flex flex-col justify-center items-center w-1/2">
                <p>Don't have an account?</p>
                <NoBorderMovingUnderlineButton name='Register' link={`${BASE_URL}/register`}/>
            </div>
            <div className="flex flex-col justify-center items-center w-1/2">
                <p>Have an account?</p>
                <NoBorderMovingUnderlineButton name='Login' link={`${BASE_URL}/login`}/>
            </div>
        </div>
    );
};

export default LoginorRegister;