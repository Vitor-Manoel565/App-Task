import { useAtom } from "jotai";
import { useCallback } from "react";
import { tasksAtom } from "./states";
import axios from "axios";

export const useStaks = () => {
  const [tasks, setTasks] = useAtom(tasksAtom);

  const fetchTasks = useCallback(async () => {
    try {
      const { data } = await axios.get("http://localhost:4000/tasks");
      setTasks(data);
    } catch (err) {
      console.log(err);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const CreateTask = useCallback(async (title: string) => {
    try {
      await axios.post("http://localhost:4000/tasks", {
        title: title,
      });
      fetchTasks();
    } catch (err) {
      console.log(err);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const RemoveTask = useCallback(async (id: string) => {
    try {
        await axios.delete(`http://localhost:4000/tasks/${id}`);
        fetchTasks();
    } catch (err) {
        console.log(err);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


  return { tasks, fetchTasks, CreateTask, RemoveTask };
};
