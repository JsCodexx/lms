
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginApi } from '../api/auth/loginApi';
import { useEffect } from 'react';


export default function Login() {
    const [data, setData] = useState("");
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [loader, setLoader] = useState(false)

    console.log(loader)

    const navigate = useNavigate()

    async function handleSubmit(e) {
        try {
            e.preventDefault()
            setLoader(true)
            // console.log(username, password, "data")
            const correctData1 = await loginApi(username, password);
            const { refreshToken, ...correctData } = correctData1;
            const { user, ...userData } = correctData1
            console.log(correctData1)

            localStorage.setItem("token", JSON.stringify(correctData.accessToken));
            localStorage.setItem("username", username);

            sessionStorage.setItem("refreshToken", refreshToken);

            if (correctData1) {
                navigate("/")
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoader(false)
        }

    }


    return (
        <div className='bg-white h-[100vh] md:h-[] '>


            <div className="flex flex-col md:flex-row gap-8">

                <div className='m-w[400px] h-[350px] md:mt-[70px]  md:ml-[150px] p-5 '>

                    <img className='ml-25' src="/src/assets/lms-removebg-preview.png" alt="pic" />



                    <form className='flex flex-col w-[300px] md:mr-[50px] md:mt-[60px]' onSubmit={handleSubmit} >
                        <div className='mb-[15px] w-full mr-[20px]'>

                            <label className='ml-10' >Username:</label>
                            <input
                                className="w-full p-2.5 ml-10 md:mt-1 rounded-[10px] border-transparent bg-[#e8f0fe] pr-[30px]"
                                type="text"
                                value={username}
                                onChange={(e) => { setusername(e.target.value) }}
                                required


                            />
                        </div>

                        <div className='mb-[15px]' >
                            <label className='ml-10'>Password:</label>
                            <input
                                className='w-full p-2.5 ml-10  md:mt-1  rounded-[10px] border-transparent bg-[#e8f0fe] pr-[30px]'
                                type="password"
                                value={password}
                                onChange={(e) => { setpassword(e.target.value) }}
                                required
                            />
                        </div>

                        <button
                            className='w-[40%] cursor-pointer border-none ml-25  p-3 md:p-[10px] md:ml-[70px] text-[20px] text-white bg-[#875df4] font-bold rounded-[800px]'
                            type='submit'
                        >
                            {loader ? "Loading..." : "Login"}
                        </button>

                    </form>

                </div >
                <div >
                    <img src="/src/assets/screenshot.png" alt="picture" />
                </div>
            </div>
        </div>
    );
}
