import axios from "axios";

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
