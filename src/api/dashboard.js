import axios from "axios";

import { refreshToken } from "./refresh";

export const studentData = async () => {
  try {
    const token = localStorage.getItem("token");

    const res = await axios.get("https://dummyjson.com/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res.data.total);
    return res.data.total;
  } catch (error) {
    if (error?.res?.status === 401) {
      const storedRefreshToken = sessionStorage.getItem("refreshToken");
      console.log(storedRefreshToken);
      if (!storedRefreshToken) {
        console.log("refresh not recieved");
        return;
      }
      const data = await refreshToken(storedRefreshToken);
      console.log(data);
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
