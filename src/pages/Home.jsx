import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import { studentData } from '../api/dashboard'
import Card from '../components/dashboard/Card';

function Home() {
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

      <Card data={data}/>



    </div>
  )
}

export default Home
