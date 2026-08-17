import axios from "axios";

export const searchUser = async () => {
  try {
    const res = await axios.get("https://dummyjson.com/users/search?q=John");
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`;
    }
    console.log(res, "user");
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
