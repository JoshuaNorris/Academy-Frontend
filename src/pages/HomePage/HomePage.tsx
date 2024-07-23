import React, {useEffect} from 'react';
import NavigationBar from '../CommonComponents/NavigationBar';
import WelcomeBody from './WelcomeBodyComponent';
import LoginorRegister from './LoginorRegisterComponent';
import Suggestions from './SuggestionsComponent';
import { User } from '../../models/User';

interface HomePageProps {
    user: User
}

const HomePage: React.FC<HomePageProps> = ({ user }) => {

    useEffect(() => {
        console.log('user changed')
    }, [user])

    console.log("HomePage received user:", user);
    return (
        <section className='flex flex-col h-screen'>
            <NavigationBar user={user}/>

            <div className="flex flex-col">
                <WelcomeBody />
                <p>{user.FirstName}</p>
                <LoginorRegister />
                <Suggestions />

            </div>
        </section>
    );
};

export default HomePage;
