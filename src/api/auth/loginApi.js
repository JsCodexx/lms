import axios from "axios";

export const loginApi = async (username, password) => {
  console.log(username, password);
  try {
    const res = await axios.post(
      "https://dummyjson.com/user/login",
      {
        username: username,
        password: password,
        expiresInMins: 50,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      },
    );

    console.log(res, "js res");
    return res.data;
    
  } catch (err) {
    alert("wrong Password & Email");
    throw err;
  } finally {
    alert("login sucessfully!");
  }
};
