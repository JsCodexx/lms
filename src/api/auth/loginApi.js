import axios from "axios";

export const loginApi = async (username,password) => {
  console.log(username,password)
  try {
    const res = await axios.post(
      "https://dummyjson.com/user/login",
      {
        username: username,
        password: password,
        expiresInMins: 30,
      },
      {
        headers: {
          // Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      
      },
      
    );

    console.log(res, "js res");
    return res.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
