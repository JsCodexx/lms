import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import { tagsData, tagsDataPost } from "../api/Tags/tagApi";
import FilterCard from "../components/FilterCard";
import Loaders from "../components/Loader";
import privateAxios from "axios";
import Sidebar from "../components/Sidebar";
import { useContext } from "react";
import { MyContext } from '../contextApi/Loader';
import Footer from '../components/Footer';

export default function Post() {
  const [data, setData] = useState([]);
  const [post, setPost] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const { loader, setLoader } = useContext(MyContext)

  // Fetch tags
  const getDataTags = async () => {
    setLoader(true)
    try {
      const student = await tagsData();
      const firstFive = student.slice(0, 5);
      setData(firstFive);
    } catch (error) {
      console.log(error)
    } finally {
      setLoader(false)
    }

  };

  useEffect(() => {
    getDataTags();
  }, []);



  // Fetch posts
  const getDataPost = async () => {
    setLoader(true)
    try {
      const studentPost = await tagsDataPost();
      console.log(studentPost);
      setPost(studentPost);
    } catch (error) {
      console.log(error)
    } finally {
      setLoader(false)
    }

  };

  useEffect(() => {
    getDataPost();
  }, []);

  // Filter posts
  const filteredProducts =
    activeCategory === "all"
      ? post
      : post.filter((item) =>
        item?.tags?.some(
          (t) => t?.toLowerCase() === activeCategory.toLowerCase()
        )
      );

  return (
    <div className='relative  max-h-full '>

      <Nav />
      {loader ? <Loaders /> :
        <div className="bg-[#F2F3F8] max-w-full h-full ">


          <div className="flex">

            <div className="flex flex-col">
              <div className="absolute top-0">  <Sidebar /></div>


            </div>


            <div className="w-full flex flex-col justify-center items-center" >
              <div className="md:w-[87%] md:h-[50px] w-105 bg-[#7c5cc4] md:mx-2 md:ml-[120px] md:mt-[35px] py-[10px] flex justify-evenly  ">
                <button
                  onClick={() => setActiveCategory("all")}
                  className="bg-[#f2f3f8] border-transparent md:h-8  md:ml-[10px] w-15 md:w-[90px] md:px-[5px] md:py-[5px] mb-[10px] rounded-[10px] cursor-pointer font-bold"
                >
                  All
                </button>

                {data.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCategory(item.name)}
                    className="bg-[#f2f3f8] border-transparent md:h-8 ml-2 md:ml-[10px] w-15 md:w-[90px] px-[5px] py-[5px] mb-[10px] rounded-[10px] cursor-pointer font-bold"
                  >
                    {item.name}
                  </button>
                ))}
              </div>



              {/* <div className="flex flex-col "> */}
              <FilterCard post={post} tag={filteredProducts} />
              {/* </div> */}

            </div>

          </div>

        </div>
      }
      <Footer />
    </div>


  );
}