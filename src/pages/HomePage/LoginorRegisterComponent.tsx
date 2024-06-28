import React from 'react';
import NoBorderMovingUnderlineButton from '../CommonComponents/NoBorderMovingUnderlineButton';

const LoginorRegister: React.FC = () => {
    return (
        <div className="flex justify-center items-center py-10 px-4">
            <div className="flex flex-col justify-center items-center w-1/2">
                <p>Don't have an account?</p>
                <NoBorderMovingUnderlineButton name='Register' link='/register'/>
            </div>
            <div className="flex flex-col justify-center items-center w-1/2">
                <p>Have an account?</p>
                <NoBorderMovingUnderlineButton name='Login' link='/login'/>
            </div>
        </div>
    );
};

export default LoginorRegister;