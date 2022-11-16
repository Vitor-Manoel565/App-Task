import { useAtom } from "jotai";
import { useCallback } from "react";
import { tasksAtom, userDataAtom } from "./states";
import axios from "axios";
import { useAuth } from "./useAuth";
import { BackendApi } from "./Api";

export const useUserData = () => {
  const [userData, setUseData] = useAtom(userDataAtom);

  const { token } = useAuth();

  const fetchUserData = useCallback(async () => {
    if (!token) return console.log("No token");
    try {
      const { data } = await BackendApi.get("/users", {
        headers: {
          Authorization: token,
        },
      });
      setUseData(data);
    } catch (err) {
      console.log(err);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return { userData, fetchUserData };
};
