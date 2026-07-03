import axios from "axios";

export const studentData = async () => {
  try {
    const res = await axios.get("https://dummyjson.com/users");
    return res.data.total;
  } catch (error) {
    console.log(error);
  }
};
