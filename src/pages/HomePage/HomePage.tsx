import React from 'react';
import NavigationBar from '../CommonComponents/NavigationBar';
import WelcomeBody from './WelcomeBodyComponent';
import LoginorRegister from './LoginorRegisterComponent';
import Suggestions from './SuggestionsComponent';

const HomePage: React.FC = () => {
  return (
    <section className='flex flex-col h-screen'>

      <NavigationBar />

      {/* Page Flexbox */}
      <div className="flex flex-col">

        <WelcomeBody />
        <LoginorRegister />
        <Suggestions />

      </div>
    </section>
  );
};

export default HomePage;
