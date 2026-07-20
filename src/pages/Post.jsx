import React from 'react'
import Nav from '../components/Nav'
import { tagsData } from '../api/Tags/tagApi'
import PostCard from '../components/PostCard';
import { useState, useEffect } from 'react';
import { tagsDataPost } from '../api/Tags/tagApi';
import FilterCard from '../components/FilterCard';
import Loaders from '../components/Loader';
import privateAxios from "axios"


export default function Post() {
    const [data, setData] = useState("");
    const [post, setPost] = useState([])
    const [activeCategory, setActiveCategory] = useState('all');
    // console.log(activeCategory, "active")
    // post tabs
    const getDataTags = async () => {
        const student = await tagsData();
        // console.log("res", student)
        const firstFive = student.slice(0, 5);
        // console.log(firstFive, "five")
        setData(firstFive);
    }
    useEffect(() => {
        getDataTags()
    }, [])
    //loading
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


    //all post
    const getDataPost = async () => {
        const studentPost = await tagsDataPost();
        console.log("res", studentPost)

        const a = setPost(studentPost);

    }
    useEffect(() => {
        getDataPost()
    }, [])

    // filter tags
    const filteredProducts = activeCategory === 'all'
        ? post
        : post.filter(item => item?.tags?.some((t) => t?.toLowerCase() === activeCategory?.toLowerCase()));
    console.log(post, ",post")
    return (
        <div>
            <Nav />


            <div className='tabs'>

                <button onClick={() => setActiveCategory('all')} className='tagButton'>
                    All
                </button>
                {Array.isArray(data) && data.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveCategory(item.name)}
                        className='tagButton'
                    >
                        {item.name}
                    </button>
                ))}
            </div>
            <Loaders show={loading} />

            <FilterCard tag={filteredProducts} />
        </div >
    )
}
