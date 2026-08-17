import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import { studentData } from '../api/dashboard'
import { Card } from '../components/Card';
import Loaders from '../components/Loader';
import privateAxios from "axios";
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

function Home() {
  const [loading, setLoading] = useState(false);

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
  const [data, setData] = useState("");

  const getData = async () => {
    const student = await studentData();
    console.log("res", student)
    setData(student);
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div>
      <Nav />
      <Loaders show={loading} />
      <div className='flex'>
        <Sidebar />
        <Card data={data} />
      </div>

      <Footer />



    </div>
  )
}

export default Home
