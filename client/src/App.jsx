import React from 'react'
import Cookies from 'universal-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Auth } from './components';
import ProfilePage from './components/ProfilePage';


const cookies = new Cookies();


const authToken = cookies.get('guid');


const App = () => {
    
    if (!authToken) return <Auth />
    if(authToken)
    return (
        <ProfilePage
            token={authToken}
        />
    
    )
}

export default App