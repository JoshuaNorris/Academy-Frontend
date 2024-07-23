import React, { useState, ChangeEvent, FormEvent } from 'react';
import { RegisterRequest, RegisterPage, UserRole, User } from '../../models/User';
import { useNavigate } from 'react-router-dom';
const { BASE_URL } = import.meta.env;

const RegisterComponent: React.FC = () => {

    // COMPONENT STATE
//----------------------------------------------------------------------------------------------------------------
    const [registerPage, setRegisterPage] = useState<RegisterPage>({
        Email: "",
        UserName: "",
        FirstName: "",
        LastName: "",
        Password: "",
        ConfirmPassword: ""
    });

    const navigate = useNavigate();
//----------------------------------------------------------------------------------------------------------------



// REGISTER FUNCTIONALITY
//----------------------------------------------------------------------------------------------------------------

    const onSubmitRegister = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Prevent default form submission behavior

        const didRegister = await attemptRegister();
        if (didRegister) {
            // Set input values on page to be blank
            setRegisterPage({
                Email: "",
                UserName: "",
                FirstName: "",
                LastName: "",
                Password: "",
                ConfirmPassword: ""
            });
        
            // Bring user to login page
            navigate(`${BASE_URL}/login`);
        }
    };


    const attemptRegister = async (): Promise<Boolean> => {
        try {
            const response = await fetch('http://localhost:5262/Users', {
                method: 'POST', headers: {'content-type': 'application/json',},
                body: JSON.stringify(registerPageToRequest())
            });

            if (!response.ok) { return false; }
            else { return true }

        } catch (error) {
            console.error('Error fetching data:', error);
            return false;
        }
    };

    const registerPageToRequest = (): RegisterRequest => {
        return {
            Email: registerPage.Email,
            UserName: registerPage.UserName,
            FirstName: registerPage.FirstName,
            LastName: registerPage.LastName,
            Password: registerPage.Password,
        };
    };
//----------------------------------------------------------------------------------------------------------------




// INPUT FIELD EVENT HANDLERS
//----------------------------------------------------------------------------------------------------------------
    const emailFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setRegisterPage(prevState => ({
            ...prevState,
            Email: newValue
        }));
    };

    const userNameFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setRegisterPage(prevState => ({
            ...prevState,
            UserName: newValue
        }));
    };

    const firstNameFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setRegisterPage(prevState => ({
            ...prevState,
            FirstName: newValue
        }));
    };

    const lastNameFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setRegisterPage(prevState => ({
            ...prevState,
            LastName: newValue
        }));
    };

    const passwordFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setRegisterPage(prevState => ({
            ...prevState,
            Password: newValue
        }));
    };

    const confirmPasswordFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setRegisterPage(prevState => ({
            ...prevState,
            ConfirmPassword: newValue
        }));
    };
//----------------------------------------------------------------------------------------------------------------


// REGISTER COMPONENT
//----------------------------------------------------------------------------------------------------------------
    return (        
        <div className="relative py-3 sm:w-96 mx-auto text-center">
            <form onSubmit={onSubmitRegister}>
                <span className="text-2xl font-light ">Create new account</span>
                <div className="mt-4 bg-white shadow-md rounded-lg text-left">
                    <div className="h-2 bg-purple-400 rounded-t-md"></div>
                    <div className="px-8 py-6 ">
                        <input
                            onChange={emailFieldChange}
                            value={registerPage.Email} 
                            type="text" 
                            placeholder="Email" 
                            className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" 
                        />
                        <input
                            onChange={userNameFieldChange}
                            value={registerPage.UserName} 
                            type="text" 
                            placeholder="User Name" 
                            className="border w-full h-5 px-3 py-5 mt-4 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" 
                        />
                        <input 
                            onChange={firstNameFieldChange}
                            value={registerPage.FirstName} 
                            type="text" 
                            placeholder="First Name" 
                            className="border w-full h-5 px-3 py-5 mt-4 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" 
                        />
                        <input 
                            onChange={lastNameFieldChange}
                            value={registerPage.LastName} 
                            type="text" 
                            placeholder="Last Name" 
                            className="border w-full h-5 px-3 py-5 mt-4 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" 
                        />
                        <input 
                            onChange={passwordFieldChange}
                            value={registerPage.Password} 
                            type="password" 
                            placeholder="Password" 
                            className="border w-full h-5 px-3 py-5 mt-4 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" 
                        />
                        <input 
                            onChange={confirmPasswordFieldChange}
                            value={registerPage.ConfirmPassword} 
                            type="password" 
                            placeholder="Confirm Password" 
                            className="border w-full h-5 px-3 py-5 mt-4 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" 
                        />
                        <div className="flex justify-between items-baseline">
                            <button type="submit" className="mt-4 bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600 ">Register</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};
//----------------------------------------------------------------------------------------------------------------

export default RegisterComponent;