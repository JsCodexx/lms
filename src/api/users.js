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
    console.log(error);
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
    console.log(error);
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
        expiresInMins: 60,
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
