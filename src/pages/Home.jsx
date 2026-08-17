import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import { studentData } from '../api/dashboard'
import { Card } from '../components/Card';
import Loaders from '../components/Loader';
import privateAxios from "axios";
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import { useContext } from 'react';
import { MyContext } from '../contextApi/Loader';
// import { refreshToken } from '../api/users';



function Home() {
  const { loader, setLoader } = useContext(MyContext)
  console.log(loader)

  const [data, setData] = useState("");
  console.log(data, "data")

  const getData = async () => {

    setLoader(true)
    try {

      const student = await studentData();
      console.log("res", student)
      setData(student);


    } catch (error) {
      console.log(error)
    } finally {
      setLoader(false)
    }


  }

  useEffect(() => {
    getData()
  }, [])

  // const refresh = refreshToken()
  // console.log(refresh,"unit")
  return (
    <div className='bg-[#F2F3F8]'>

      <Nav />

      {loader ? <Loaders /> :
        <div className='flex'>
          <Sidebar />
          <div>
            <h1 className='ml-8 mt-4 text-2xl font-semibold'>My Course (Spring 2026)</h1>
            <Card data={data} />
          </div>

        </div>
      }




      <Footer />



    </div>
  )
}

export default Home
