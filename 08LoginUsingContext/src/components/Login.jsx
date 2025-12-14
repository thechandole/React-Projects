import React, { useState } from 'react'
import UserContext from '../context/UserContext';



function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {setUser} = React.useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser(username, password);
    }
    return (
        <div className='m-5 p-5 border-2 border-black-500 rounded-lg'>
            
            <input type='text'
            className='bg-white rounded-lg shadow-lg'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='username'/>
            {" "}
            <input type='password'
            className='bg-white rounded-lg shadow-lg'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='password'/>
            {" "}
            <button 
            className='bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg'
            onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login
