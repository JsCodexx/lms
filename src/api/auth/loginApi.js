import axios from "axios";

export const loginApi = async () => {
  try {
    const res = await axios.post(
      "https://dummyjson.com/user/login",
      {
        username: "emilys",
        password: "emilyspass",
        expiresInMins: 30,
            
      },
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJlbWlseXMiLCJlbWFpbCI6ImVtaWx5LmpvaG5zb25AeC5kdW1teWpzb24uY29tIiwiZmlyc3ROYW1lIjoiRW1pbHkiLCJsYXN0TmFtZSI6IkpvaG5zb24iLCJnZW5kZXIiOiJmZW1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL2VtaWx5cy8xMjgiLCJpYXQiOjE3ODMzNDU4OTQsImV4cCI6MTc4MzM0NzY5NH0.o4nK5bX_6lkki7SK1_bzZuixvHYxEhx5RLQbPV268o8`,
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
