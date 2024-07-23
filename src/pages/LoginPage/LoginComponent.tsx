import React, { useState, ChangeEvent, FormEvent } from 'react';
import { LoginRequest, User } from '../../models/User';
const { BASE_URL } = import.meta.env;
import { useNavigate } from 'react-router-dom';

type CompleteLoginType = (newUser: User) => void;

interface LoginComponentProps {
    completeLogin: CompleteLoginType
}

const LoginComponent: React.FC<LoginComponentProps> = ({ completeLogin }) => {

// STATE
//----------------------------------------------------------------------------------------------------------------
    const [loginRequest, setLoginRequest] = useState<LoginRequest>({
        Email: "",
        Password: ""
    });

    const navigate = useNavigate();
//----------------------------------------------------------------------------------------------------------------



// ATTEMPT LOGIN
//----------------------------------------------------------------------------------------------------------------
    const onSubmitSignin = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const user = await attemptLogin();
        if (user) {
            setLoginRequest({
                Email: "",
                Password: ""
            });
            completeLogin(user);
            navigate(`${BASE_URL}/`);
        }
    };

    const attemptLogin = async (): Promise<User | undefined> => {
        try {
            const response = await fetch('http://localhost:5262/Users/login', {
                method: 'POST', headers: { 'content-type': 'application/json', },
                body: JSON.stringify(loginRequest)
            });

            if (!response.ok) { throw new Error('Failed to login'); }

            const data = await response.json();
            const user = data as User;
            return user;
        } catch (error) {
            console.error('Error fetching data:', error);
            return undefined;
        }
    };
//----------------------------------------------------------------------------------------------------------------





// INPUT FIELD EVENT HANDLERS
//----------------------------------------------------------------------------------------------------------------
    const emailFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setLoginRequest(prevState => ({
            ...prevState,
            Email: newValue
        }));
    };

    const passwordFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setLoginRequest(prevState => ({
            ...prevState,
            Password: newValue
        }));
    };
//----------------------------------------------------------------------------------------------------------------






// LOGIN COMPONENT
//----------------------------------------------------------------------------------------------------------------
    return (
        <div className="relative py-3 sm:w-96 mx-auto text-center">
            <form onSubmit={onSubmitSignin}>
                <span className="text-2xl font-light">Login to your account</span>
                <div className="mt-4 bg-white shadow-md rounded-lg text-left">
                    <div className="h-2 bg-purple-400 rounded-t-md"></div>
                    <div className="px-8 py-6 ">
                        <input
                            onChange={emailFieldChange}
                            value={loginRequest.Email}
                            type="text"
                            placeholder="Email"
                            className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
                        />
                        <input
                            onChange={passwordFieldChange}
                            value={loginRequest.Password}
                            type="password"
                            placeholder="Password"
                            className="border w-full h-5 px-3 py-5 mt-4 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
                        />
                        <div className="flex justify-between items-baseline">
                            <button type="submit" className="mt-4 bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600">
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
//----------------------------------------------------------------------------------------------------------------
};

export default LoginComponent;
