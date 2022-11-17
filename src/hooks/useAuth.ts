import axios from "axios";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { tokenAtom } from "./states";
import { userAtom } from "./states";


export const useAuth = () => {
  const [token, setToken] = useAtom(tokenAtom);
  const [User, setUser] = useAtom(userAtom);
  const [id, setId] = useAtom(userAtom);

  const singIn = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      const response = await axios.post("http://localhost:4000/auth/login", {
        email,
        password,
      });
      console.log("id aqui:",id);
      window.localStorage.setItem("tasks@token", response.data.token);
      setToken(response.data.token);
      setId(response.data.id);


      return true;
    } catch (error) {
      console.log(null);
      return false;
    }
  };
  

  const resgiter = async ({
    email,
    password,
    confirmPassword,
    name,
  }: {
    email: string;
    password: string;
    confirmPassword: string;
    name: string;
  }) => {
    try {
      const response = await axios.post("http://localhost:4000/auth/register", {
        email,
        password,
        confirmPassword,
        name,
      });
      setToken(response.data.token);
      window.localStorage.setItem("tasks@token", response.data.token);
      return {
        success: true,
        message: response.data.message,
      };
    } catch (error) {
      console.log(null);
      return {
        error: error,
      };
    }
  };


  const singOut = () => {
    setToken(null);
    localStorage.removeItem("tasks@token");
  };

  return { token, singIn, singOut, setToken, resgiter,User };
};
