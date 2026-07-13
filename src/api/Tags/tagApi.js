import React from "react";
import axios from "axios";

// tags tabs
export const tagsData = async () => {
  const userData = localStorage.getItem("token");
  try {
    const res = await axios.get("https://dummyjson.com/posts/tags", {
      headers: {
        Authorization: `Bearer ${userData}`,
      },
      withCredentials: true,
    });

    const users = res.data;
    // console.log(users, "users");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// all posts

export const tagsDataPost = async () => {
  const userData = localStorage.getItem("token");
  try {
    const res = await axios.get("https://dummyjson.com/posts", {
      headers: {
        Authorization: `Bearer ${userData}`,
      },
      withCredentials: true,
    });

    const usersPost = res.data.posts;
    console.log(usersPost, "users");
    return res.data.posts;
  } catch (error) {
    console.log(error);
  }
};

// filter Tag
export const FilterDataPost = async () => {
  const userData = localStorage.getItem("token");
  try {
    const res = await axios.get("https://dummyjson.com/posts/tag/life", {
      headers: {
        Authorization: `Bearer ${userData}`,
      },
      withCredentials: true,
    });

    const usersPost = res.data.posts;
    console.log(usersPost, "users");
    return res.data.posts;
  } catch (error) {
    console.log(error);
  }
};
