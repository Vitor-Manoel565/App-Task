import { useAtom } from "jotai";
import { useEffect } from "react";
import { tokenAtom } from "./states";
import { userAtom } from "./states";
import { BackendApi } from "./Api";

export const useAuth = () => {
  const [token, setToken] = useAtom(tokenAtom);
  const [User, setUser] = useAtom(userAtom);
  // const [id, setId] = useAtom(userAtom);

  const singIn = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      const response = await BackendApi.post("/auth/login", {
        email,
        password,
      });

      setToken(response.data.token);
      setUser(response.data.existingUser);
      console.log(User);

      window.localStorage.setItem("tasks@token", response.data.token);

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
      const response = await BackendApi.post("/auth/register", {
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

  // useEffect(() => {
  // const fetchUser = async () => {
  //   try {
  //     const response = await axios.get(`http://localhost:4000/user/${id}`, {
  //       headers: {
  //         Authorization: token,
  //       },
  //     });

  //     setUser(response.data);
  //     console.log(User);

  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // fetchUser();
  // }, [token,id]);

  const singOut = () => {
    setToken(null);
    localStorage.removeItem("tasks@token");
  };

  return { token, singIn, singOut, setToken, resgiter, User };
};
