import React from 'react';
import RegisterComponent from './RegisterComponent';

const RegisterPage: React.FC = () => {
  return (
      <div className="min-h-screen flex flex-col justify-center sm:py-12">
          <RegisterComponent />
      </div>
  );
};

export default RegisterPage;