import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function Login({setUser}) {
    const navigate = useNavigate();
    function handleSubmit() {

        setUser({ loggedin: "waleed" })
        navigate("/")
    }
    return (
        <div>
            <div><h1 >Login</h1></div>
            <button className='login' onClick={handleSubmit} >login</button>
        </div>
    )
}
