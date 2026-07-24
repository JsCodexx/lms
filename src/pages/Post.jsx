import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import { tagsData, tagsDataPost } from "../api/Tags/tagApi";
import FilterCard from "../components/FilterCard";
import Loaders from "../components/Loader";
import privateAxios from "axios";
import Sidebar from "../components/Sidebar";

export default function Post() {
  const [data, setData] = useState([]);
  const [post, setPost] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [loading, setLoading] = useState(false);

  // Fetch tags
  const getDataTags = async () => {
    const student = await tagsData();
    const firstFive = student.slice(0, 5);
    setData(firstFive);
  };

  useEffect(() => {
    getDataTags();
  }, []);

  // Axios loading interceptor
  useEffect(() => {
    const requestInterceptor = privateAxios.interceptors.request.use(
      (config) => {
        setLoading(true);
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseInterceptor = privateAxios.interceptors.response.use(
      (response) => {
        setLoading(false);
        return response;
      },
      (error) => {
        setLoading(false);
        return Promise.reject(error);
      }
    );

    return () => {
      privateAxios.interceptors.request.eject(requestInterceptor);
      privateAxios.interceptors.response.eject(responseInterceptor);
    };
  }, []);

  // Fetch posts
  const getDataPost = async () => {
    const studentPost = await tagsDataPost();
    console.log(studentPost);
    setPost(studentPost);
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
    <div>
      <Nav />

      <div className="flex">
        <Sidebar />

        <div >
          <div className="w-[90%] h-[50px] bg-[#7c5cc4] ml-[85px] mt-[35px] py-[8px] ">
            <button
              onClick={() => setActiveCategory("all")}
              className="bg-[#f2f3f8] border-transparent ml-[10px] w-[90px] px-[5px] py-[5px] mb-[10px] rounded-[10px] cursor-pointer font-bold"
            >
              All
            </button>

            {data.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(item.name)}
                className="bg-[#f2f3f8] border-transparent ml-[10px] w-[90px] px-[5px] py-[5px] rounded-[10px] cursor-pointer font-bold"
              >
                {item.name}
              </button>
            ))}
          </div>

          <Loaders show={loading} />

          <div className="flex flex-col">
            <FilterCard tag={filteredProducts} />
          </div>
        </div>
      </div>
    </div>
  );
}