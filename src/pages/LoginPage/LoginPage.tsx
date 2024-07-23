import React from 'react';
import LoginComponent from './LoginComponent';
import { User } from '../../models/User';

type CompleteLoginType = (newUser: User) => void;

interface LoginPageProps {
    completeLogin: CompleteLoginType
}

const LoginPage: React.FC<LoginPageProps> = ({ completeLogin }) => {
    return (
        <div className="min-h-screen flex flex-col justify-center sm:py-12">
            <LoginComponent completeLogin={completeLogin}/>
        </div>
    );
};

export default LoginPage;