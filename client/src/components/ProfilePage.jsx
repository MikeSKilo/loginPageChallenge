import React, { useEffect, useState } from 'react'
import ProfileLayout from "./ProfileLayout";
import Axios from 'axios'


const ProfilePage = ({ token }) => {
    const [profile, setProfile] = useState();
    const endpointURL = process.env.REACT_APP_URL;

    const getSuccess = res => {
        console.log("getSuccess", res)
        setProfile(res.data.user)
    }
    const getError = err => {
        console.warn("getError", err)
        
    }
    
    useEffect(() => {
        Axios.get(`${endpointURL}/profile`, {
            params: {
                ID: token
            }
        })
            .then(getSuccess)
            .catch(getError)
    }, [])
    
    if (profile)
    return (
        <ProfileLayout profile={profile}>
        </ProfileLayout>
    
    )
}

export default ProfilePage