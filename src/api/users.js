import axios from "axios";
import { useParams } from "react-router-dom";

export const userData = async () => {
  const userData = localStorage.getItem("token");

  try {
    const res = await axios.get("https://dummyjson.com/users", {
      headers: {
        Authorization: `Bearer ${userData}`,
      },
      withCredentials: true,
    });

    const users = res;
    // console.log(users, "users");
    return res.data.users;
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

// single user

export const SingleUserData = async (id) => {
  const userData = localStorage.getItem("token");

  try {
    const res = await axios.get(`https://dummyjson.com/users/${id}`, {
      headers: {
        Authorization: `Bearer ${userData}`,
      },
      withCredentials: true,
    });

    console.log(res, "res");

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

//refresh call

export const refreshToken = async () => {
  const refreshData = sessionStorage.getItem("refreshToken");
  console.log(refreshData);

  try {
    const refreshRes = await axios.post(
      "https://dummyjson.com/auth/refresh",
      {
        refreshToken: refreshData,
        expiresInMins: 2,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      },
    );

    console.log(refreshRes.data, "refreshRes");
    return refreshRes.data;
  } catch (error) {
    console.log(error);
  }
};
