import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import { useParams } from 'react-router-dom';
import { refreshToken, SingleUserData } from '../api/users';
import Loaders from '../components/Loader';
import privateAxios from "axios"
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

export default function StudentPage({ user }) {
    console.log(user)
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);
    const { id } = useParams()
    console.log(id)
    useEffect(() => {
        privateAxios.interceptors.response.use(
            (config) => {
                setLoading(false);
                return config;
            },
            (error) => {
                return Promise.reject(error);
            },
        );

        privateAxios.interceptors.request.use(
            (config) => {
                setLoading(true);
                return config;
            },
            (error) => {
                return Promise.reject(error);
            },
        );
    }, []);
    const [currentTab, setCurrentTab] = useState('profile');
    const [data, setData] = useState("");

    const getData = async () => {

        let singleData = await SingleUserData(id);
        console.log(singleData, "single")
        if (singleData === undefined) {
            const data = await refreshToken();

            console.log(data)
            const storage = localStorage.setItem("token", JSON.stringify(data))
            // console.log(storage, "storage")
            const result = sessionStorage.setItem("refreshToken", data);
            console.log(result)
            if (data) {
                singleData = await SingleUserData();
            } else {
                // navigate("/")
            }

        }
        setData(singleData);
    }

    useEffect(() => {
        if (id) {
            getData();
        }


    }, [id]);
    function handlePostButton(user) {
        navigate(`/contact/${user}`)
    }

    return (
        <>  <Nav />
            <h2 className='mt-[20px] text-black font-serif text-[50px] ml-[40px] ' style={{ marginLeft: "80px" }}>Student Profile</h2>
            <Loaders show={loading} />
            <div className='flex gap-[50px]'>
                <div  className='shadow-[0_15px_10px_rgba(0,0,0,0.15)] bg-white w-[300px] h-[400px] ml-[80px] '>
                    <div className='mt-[20px] flex flex-col gap-[5px] ml-[80px] ' >
                        <button className='mr-[60px] cursor-pointer ' onClick={() => { handlePostButton(data.id) }}>
                            <img src="/src/assets/profileIcon.webp" alt="" style={{ width: "120px", paddingLeft: "0px", paddingTop: "30px" }} />
                        </button>

                        <h2 className='mt-[20px] text-black font-serif text-[40px] ml-[0px] '>{data.username}</h2>
                        <p style={{ marginTop: "0px" }}>bc260213343</p>
                        <h5 >bc260213343was@vu.edu.pk</h5>
                    </div>
                </div>
                <div className='p-0 w-[500px] '>
                    <div className='shadow-[0_15px_10px_rgba(0,0,0,0.15)] bg-white w-[800px] h-[400px] ' >


                        <div className='flex flex-row gap-[3px] pt-[20px] pl-[30px] ' >


                            <button
                                onClick={() => setCurrentTab('profile')}
                                style={{ backgroundColor: currentTab === 'profile' ? '#7c5cc4' : '#fff', color: currentTab === 'profile' ? '#fff' : '#000', padding: '10px', textAlign: 'left' }}
                            >
                                Student Profile
                            </button>


                            <button
                                onClick={() => setCurrentTab('personal')}
                                style={{ backgroundColor: currentTab === 'personal' ? '#7c5cc4' : '#fff', color: currentTab === 'personal' ? '#fff' : '#000', padding: '10px', textAlign: 'left' }}
                            >
                                Personal Information
                            </button>


                            <button
                                onClick={() => setCurrentTab('academic')}
                                style={{ backgroundColor: currentTab === 'academic' ? '#7c5cc4' : '#fff', color: currentTab === 'academic' ? '#fff' : '#000', padding: '10px', textAlign: 'left' }}
                            >
                                Academic History
                            </button>

                        </div>


                        <div className='border-2 border-[#ccc] pl-[80px] mt-[10px] h-[300px] ml-[30px] mr-[30px]' >


                            {currentTab === 'profile' && (
                                <div className='text-start pl-30 pt-10 text-2xl' >
                                    <h4>Name: {data.firstName}</h4>
                                    <p><b>Age:{data.age}</b></p>
                                    <h4>Gender: {data.gender}</h4>
                                    <p><b>Password:{data.password
                                    }</b></p>
                                </div>
                            )}


                            {currentTab === 'personal' && (
                                <div className='text-start pl-30 pt-10 text-2xl'>
                                    <h4>Name: {data.firstName}</h4>
                                    <p><b>Adress:{data.address.address}</b></p>
                                    <h4>Date of Birth:{data.birthDate}</h4>
                                    <p><b>Email:{data.email
                                    }</b></p>
                                </div>
                            )}


                            {currentTab === 'academic' && (
                                <div className='text-start pl-30 pt-10 text-2xl'>
                                    <h4>Matric Marks: <b>850 / 1100</b></h4>

                                    <h4>Intermediate: <b>950 / 1100</b></h4>
                                    <h4>Subject:<b>ICS</b></h4>
                                </div>
                            )}

                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );

}

