// import React, { useState, useEffect } from 'react'
// import Nav from '../components/Nav'
// import PostCard from '../components/PostCard'
// import { SingleUserData } from '../api/users'
// import { useParams } from 'react-router-dom'

// function Contact() {
//   const { id } = useParams()
//   const [user, setUser] = useState('')
//   const getData = async () => {
//     const student = await SingleUserData(id);
//     // console.log("res", student)
//     setUser(student);
//   }
//   useEffect(() => {
//     getData()
//   }, [])
//   return (
//     <div>
//       <Nav />
//       <PostCard user={user} />


//     </div>
//   )
// }

// export default Contact
