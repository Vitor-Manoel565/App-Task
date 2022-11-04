import * as S from "./styles";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {TaskTypes} from "../../types/task";
interface PropsTasks {
  tasks: string;
}

const ContainerTasks: React.FC<PropsTasks> = ({ tasks }) => {
  const id = uuidv4();
  const [search, getSearch] = useState("");
  const [tasksList, setTasksList] = useState<TaskTypes[] | null>([]);

  useEffect(() => {
    const tasksStorage = localStorage.getItem("tasks");
    if (tasksStorage) {
      setTasksList(JSON.parse(tasksStorage));
    }
  }, []);

  const AddNewTask = () => {
    const newTask = {
      id: uuidv4(),
      title: "Dashboard",
      description: "Criar um dashboard",
      status: "Em andamento",
    };

    const oldTasks = tasksList || [];
    const newTasks = [...oldTasks, newTask];
    setTasksList(newTasks);
    console.log(tasksList);
  };

  useEffect(() => {}, [search]);

  return (
    <S.containerTasks>
      <S.Title>{tasks}</S.Title>
      <S.Search
        placeholder="Search:"
        onChange={(e) => getSearch(e.target.value)}
      />
      <S.ContainerList>
        <S.Item>
          <S.LogoItem />
          <S.ContainerProgress>
            {tasksList?.length! > 0
              ? tasksList?.map((task) => {
                  return (
                    <S.Item key={task.id}>
                      <S.TitleTask>{task?.title}</S.TitleTask>
                      <S.ProgressItem />
                    </S.Item>
                  );
                })
              : "Nenhuma tarefa encontrada"}
          </S.ContainerProgress>
          <S.ProgressText>%</S.ProgressText>
        </S.Item>
        <S.ButtonAddItem onClick={() => AddNewTask}>+</S.ButtonAddItem>
      </S.ContainerList>
    </S.containerTasks>
  );
};

export default ContainerTasks;
