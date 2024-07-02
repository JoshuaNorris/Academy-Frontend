import React from 'react';
import LoginComponent from './LoginComponent';

const LoginPage: React.FC = () => {
  return (
      <div className="min-h-screen flex flex-col justify-center sm:py-12">
          <LoginComponent />
      </div>
  );
};

export default LoginPage;