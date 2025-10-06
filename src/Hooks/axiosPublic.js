import axios from "axios";

const useAxiosPublic = () => {
  const instance = axios.create({
    // baseURL: "http://localhost:5000",
    baseURL: `https://tour-management-project-server-by-l-omega.vercel.app`,

  });

  return instance;
};

export default useAxiosPublic;