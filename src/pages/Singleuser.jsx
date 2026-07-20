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
            <h2 style={{ marginLeft: "80px" }}>Student Profile</h2>
            <Loaders show={loading} />
            <div style={{ display: "flex", gap: "50px" }}>
                <div style={{ boxShadow: "0 15px 10px rgba(0, 0, 0, 0.15)", backgroundColor: "white", width: "300px", height: "400px", marginLeft: "80px" }}>
                    <div style={{ marginTop: '20px', display: "flex", flexDirection: "column", gap: "05px", marginLeft: '80px', }}>
                        <button className='buttonPost' onClick={() => { handlePostButton(data.id) }}>
                            <img src="/src/assets/profileIcon.webp" alt="" style={{ width: "120px", paddingLeft: "0px", paddingTop: "30px" }} />
                        </button>

                        <h2>{data.username}</h2>
                        <p style={{ marginTop: "0px" }}>bc260213343</p>
                        <h5 >bc260213343was@vu.edu.pk</h5>
                    </div>
                </div>
                <div style={{ padding: '0px', maxWidth: '500px' }}>
                    <div style={{ boxShadow: "0 15px 10px rgba(0, 0, 0, 0.15)", backgroundColor: "#ffffff", width: "800px", height: "400px" }}>


                        <div style={{ display: 'flex', flexDirection: 'row', gap: '03px', paddingTop: "20px", paddingLeft: "30px", }}>


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


                        <div style={{ border: '1px solid #ccc', paddingLeft: '150px', marginTop: "10px", height: "300px", marginLeft: "30px", marginRight: "30px" }}>


                            {currentTab === 'profile' && (
                                <div>
                                    <h4>Name: {data.firstName}</h4>
                                    <p><b>Age:{data.age}</b></p>
                                    <h4>Gender: {data.gender}</h4>
                                    <p><b>Password:{data.password
                                    }</b></p>
                                </div>
                            )}


                            {currentTab === 'personal' && (
                                <div>
                                    <h4>Name: {data.firstName}</h4>
                                    <p><b>Adress:{data.address.address}</b></p>
                                    <h4>Date of Birth:{data.birthDate}</h4>
                                    <p><b>Email:{data.email
                                    }</b></p>
                                </div>
                            )}


                            {currentTab === 'academic' && (
                                <div>
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

