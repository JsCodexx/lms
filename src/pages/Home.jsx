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
import { refreshToken } from '../api/refresh';

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
      if (student === "401") {
        const data = await refreshToken()
        sessionStorage.setItem("token", data.refreshToken)
        localStorage.setItem("token", data.accessToken)
        console.log(data)
      }



    } catch (error) {

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
    <div  >
      <Nav />
      {loader ? <Loaders /> :
        <div className='bg-[#f2f3f8] max-w-full h-full '>
          <div className='flex w-full  '>
            <div className='absolute top-0 '>
              <Sidebar />
            </div>

            <div className='w-full flex flex-col justify-center items-center ' >

              <h1 className='ml-25 mt-4 text-2xl font-semibold'>My Course (Spring 2026)</h1>
              <Card data={data} />

            </div>

          </div>

        </div >}
      <div>
        <Footer />
      </div>
    </div>

  )
}

export default Home
