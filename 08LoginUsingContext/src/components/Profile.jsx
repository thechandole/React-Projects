import React from 'react'
import UserContext from '../context/UserContext'

function Profile() {

    const {user} = React.useContext(UserContext);

    if (!user) return <div className='bg-black text-white'>Please Login</div>
    return <div className='bg-black text-white'>Welcome : {user}</div>
    
}

export default Profile
