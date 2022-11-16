import { useAtom } from "jotai";
import { useCallback } from "react";
import { tasksAtom } from "./states";
import axios from "axios";
import { useAuth } from "./useAuth";
import { BackendApi } from "./Api";

export const useStaks = () => {
  const [tasks, setTasks] = useAtom(tasksAtom);

  const { token } = useAuth();

  const fetchTasks = useCallback(async () => {
    if (!token) return console.log("No token");
    try {
      const { data } = await BackendApi.get("/tasks", {
        headers: {
          Authorization: token,
        },
      });
      setTasks(data);
    } catch (err) {
      console.log(err);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const CreateTask = useCallback(
    async (title: string) => {
      try {
        await BackendApi.post(
          "/tasks",
          {
            title: title,
          },
          {
            headers: {
              Authorization: token,
            },
          }
        );
        fetchTasks();
      } catch (err) {
        console.log(err);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [token]
  );

  const RemoveTask = useCallback(
    async (id: string) => {
      try {
        await BackendApi.delete(`/tasks/${id}`, {
          headers: {
            Authorization: token,
          },
        });
        fetchTasks();
      } catch (err) {
        console.log(err);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [token]
  );

  return { tasks, fetchTasks, CreateTask, RemoveTask };
};
