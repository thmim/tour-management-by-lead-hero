// import axios from "axios";

// const useAxiosPublic = () => {
//   const instance = axios.create({
//     baseURL: "http://localhost:5000",
//     // baseURL: `https://tour-management-project-server-by-l-omega.vercel.app`,

//   });

//   return instance;
// };

// export default useAxiosPublic;

import axios from "axios";

const useAxiosPublic = () => {
  const axiosPublic = axios.create({
    baseURL: "/api",
  });

  return axiosPublic;
};

export default useAxiosPublic;