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
 if (error?.res?.status === 401) {
      const storedRefreshToken = sessionStorage.getItem("refreshToken");
      console.log(storedRefreshToken);
      if (!storedRefreshToken) {
        console.log("refresh not recieved");
        return;
      }
      const data = await refreshToken(storedRefreshToken);

      const newAccessToken = data?.accessToken || data?.token;
      const newRefreshToken = data?.refreshToken || data?.token;
      console.log(newAccessToken, "new");
      console.log(newRefreshToken, "newRefresh");

      localStorage.setItem("token", newAccessToken);
      sessionStorage.setItem("refreshToken", newRefreshToken);

      const res = await axios.get("https://your-api.com/users", {
        headers: {
          Authorization: `Bearer ${newRefreshToken}`,
        },
      });

      return res.data.total;
    }
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
 if (error?.res?.status === 401) {
      const storedRefreshToken = sessionStorage.getItem("refreshToken");
      console.log(storedRefreshToken);
      if (!storedRefreshToken) {
        console.log("refresh not recieved");
        return;
      }
      const data = await refreshToken(storedRefreshToken);

      const newAccessToken = data?.accessToken || data?.token;
      const newRefreshToken = data?.refreshToken || data?.token;
      console.log(newAccessToken, "new");
      console.log(newRefreshToken, "newRefresh");

      localStorage.setItem("token", newAccessToken);
      sessionStorage.setItem("refreshToken", newRefreshToken);

      const res = await axios.get("https://your-api.com/users", {
        headers: {
          Authorization: `Bearer ${newRefreshToken}`,
        },
      });

      return res.data.total;
    }
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
     if (error?.res?.status === 401) {
      const storedRefreshToken = sessionStorage.getItem("refreshToken");
      console.log(storedRefreshToken);
      if (!storedRefreshToken) {
        console.log("refresh not recieved");
        return;
      }
      const data = await refreshToken(storedRefreshToken);

      const newAccessToken = data?.accessToken || data?.token;
      const newRefreshToken = data?.refreshToken || data?.token;
      console.log(newAccessToken, "new");
      console.log(newRefreshToken, "newRefresh");

      localStorage.setItem("token", newAccessToken);
      sessionStorage.setItem("refreshToken", newRefreshToken);

      const res = await axios.get("https://your-api.com/users", {
        headers: {
          Authorization: `Bearer ${newRefreshToken}`,
        },
      });

      return res.data.total;
    }
  }
};
