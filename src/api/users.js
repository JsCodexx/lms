import axios from "axios";
import { useParams } from "react-router-dom";

export const userData = async () => {
  try {
    const res = await axios.get("https://dummyjson.com/users");
    const users = res;
    // console.log(users, "users");
    return res.data.users;
  } catch (error) {
    console.log(error);
  }
};

// single user

export const SingleUserData = async (id) => {
  try {
    const res = await axios.get(`https://dummyjson.com/users/1`);
    const users = res;
    console.log(users, "users");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
