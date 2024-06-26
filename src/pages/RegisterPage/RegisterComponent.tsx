import React from 'react';

const RegisterComponent: React.FC = () => {
    return (        
        <div className="relative py-3 sm:w-96 mx-auto text-center">
            <span className="text-2xl font-light ">Login to your account</span>
            <div className="mt-4 bg-white shadow-md rounded-lg text-left">
                <div className="h-2 bg-purple-400 rounded-t-md"></div>
                <div className="px-8 py-6 ">
                    <label className="block font-semibold"> Username or Email </label>
                    <input 
                        type="text" 
                        placeholder="Email" 
                        className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" 
                    />
                    <label className="block mt-3 font-semibold"> Password </label>
                    <input 
                        type="password" 
                        placeholder="Password" 
                        className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" 
                    />
                    <div className="flex justify-between items-baseline">
                        <button type="submit" className="mt-4 bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600 ">Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterComponent;