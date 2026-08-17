import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import { useParams } from 'react-router-dom';
import { refreshToken, SingleUserData } from '../api/users';
import Loaders from '../components/Loader';
import privateAxios from "axios"
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { MyContext } from '../contextApi/Loader';

export default function StudentPage({ user }) {
    console.log(user)
    const { loader, setLoader } = useContext(MyContext)
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);
    const { id } = useParams()
    console.log(id)

    const [currentTab, setCurrentTab] = useState('profile');
    const [data, setData] = useState("");

    const getData = async () => {
        setLoader(true)
        try {
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
        } catch (error) {
            console.log(error)
        } finally {
            setLoader(false)
        }


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
            {loader ? <Loaders /> : <>
                <div className='bg-[#f3f2f8]'>
                    <h1 className='ml-12 pt-10 text-2xl font-semibold'>Student Profile</h1>

                    <div className='md:flex md:flex-row flex-col gap-[50px]  '>

                        <div className='shadow-[0_15px_10px_rgba(0,0,0,0.15)] bg-white md:w-[300px] md:mt-10 w-103 h-[400px] md:ml-[40px] mx-2 '>
                            <div className='mt-[20px] flex flex-col gap-[5px] ml-4 ' >

                                <button className='mr-[60px] ml-4  cursor-pointer ' onClick={() => { handlePostButton(data.id) }}>
                                    <img src="/src/assets/profileIcon.webp" alt="" style={{ width: "120px", marginLeft: "70px", paddingLeft: "0px", paddingTop: "30px" }} />
                                </button>

                                <h2 className='mt-[20px] text-black font-serif text-[40px] ml-[90px] '>{data.username}</h2>
                                <p style={{ marginTop: "0px", marginLeft: "100px" }}>bc260213343</p>
                                <h5 className='ml-10' >bc260213343was@vu.edu.pk</h5>
                            </div>
                        </div>
                        <div className='p-0 md:w-[500px] mt-10 mb-10 '>
                            <div className='shadow-[0_15px_10px_rgba(0,0,0,0.15)] bg-white md:w-[800px] w-105 h-[400px] ' >


                                <div className='flex flex-row gap-[3px] pt-[20px] pl-[30px] ' >


                                    <button
                                        onClick={() => setCurrentTab('profile')}
                                        style={{ cursor: "pointer", backgroundColor: currentTab === 'profile' ? '#7c5cc4' : '#fff', color: currentTab === 'profile' ? '#fff' : '#000', padding: '10px', textAlign: 'left' }}
                                    >
                                        Student Profile
                                    </button>


                                    <button
                                        onClick={() => setCurrentTab('personal')}
                                        style={{ cursor: "pointer", backgroundColor: currentTab === 'personal' ? '#7c5cc4' : '#fff', color: currentTab === 'personal' ? '#fff' : '#000', padding: '10px', textAlign: 'left' }}
                                    >
                                        Personal Information
                                    </button>


                                    <button
                                        onClick={() => setCurrentTab('academic')}
                                        style={{ cursor: "pointer", backgroundColor: currentTab === 'academic' ? '#7c5cc4' : '#fff', color: currentTab === 'academic' ? '#fff' : '#000', padding: '10px', textAlign: 'left' }}
                                    >
                                        Academic History
                                    </button>

                                </div>


                                <div className='border-2 border-[#ccc] pl-[80px] mt-[10px] h-[300px] ml-[30px] mr-[30px] ' >


                                    {currentTab === 'profile' && (
                                        <div className='text-start md:pl-30 pt-10 text-2xl' >
                                            <h4 >Name: {data.firstName}</h4>
                                            <p className='pt-3'><b>Age:{data.age}</b></p>
                                            <h4 className='pt-3'>Gender: {data.gender}</h4>
                                            <p className='pt-3'><b>Password:{data.password
                                            }</b></p>
                                        </div>
                                    )}


                                    {currentTab === 'personal' && (
                                        <div className='md:text-start  md:pl-30 pt-10 text-2xl'>
                                            <h4>Name: {data.firstName}</h4>
                                            <p className='pt-3'><b>Adress:{data.address.address}</b></p>
                                            <h4 className='pt-3'>Date of Birth:{data.birthDate}</h4>
                                            <p className='pt-3'><b >Phone:{data.phone
                                            }</b></p>
                                        </div>
                                    )}


                                    {currentTab === 'academic' && (
                                        <div className='text-start md:pl-30 pt-10 text-2xl'>
                                            <h4 className='pt-3'>Matric Marks: <b>850 / 1100</b></h4>

                                            <h4 className='pt-3'>Intermediate: <b>950 / 1100</b></h4>
                                            <h4 className='pt-3'>Subject:<b>ICS</b></h4>
                                        </div>

                                    )}
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </>}


        </>
    );

}

