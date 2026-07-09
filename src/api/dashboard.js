import axios from "axios";

export const studentData = async () => {
  try {
    const res = await axios.get("https://dummyjson.com/users");
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`;
    }
    return res.data.total;
  } catch (error) {
    console.log(error);
  }
};
