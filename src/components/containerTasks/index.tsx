import * as S from "./styles";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {TaskTypes} from "../../types/task";
import { log } from "console";
interface PropsTasks {
  tasks: string;
}

const ContainerTasks: React.FC<PropsTasks> = ({ tasks }) => {
  const id = uuidv4();
  const [search, getSearch] = useState("");
  const [showTasks, setShowTasks] = useState(false);
  const [tasksList, setTasksList] = useState<TaskTypes[] >([]);

  // useEffect(() => {
  //   const tasksStorage = localStorage.getItem("tasks");
  //   if (tasksStorage) {
  //     setTasksList(JSON.parse(tasksStorage));
  //   }
  // }, []);

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
    console.log(newTasks);
    setShowTasks(true);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksList));
    const tasksStorage = localStorage.getItem("tasks") || '[]';
    if (tasksStorage) {
      setTasksList(JSON.parse(tasksStorage));
    }
    tasksStorage.length < 0 ? setShowTasks(true) : setShowTasks(false);
    console.log(showTasks);
    

  }, []);

  useEffect(() => {}, [search]);

  return (
    <S.containerTasks>
      <S.Title>{tasks}</S.Title>
      <S.Search
        placeholder="Search:"
        onChange={(e) => getSearch(e.target.value)}
      />
      <S.ContainerList>
            {
              showTasks === true ? ( 
                tasksList.map((tasks) => (
                  <S.ContainerList key={tasks.id}>
                    <S.Item>
                      <S.TitleTask>{tasks.title}</S.TitleTask>
                      <S.LogoItem />
                      <S.ContainerProgress/>
                    </S.Item>
                  </S.ContainerList>
                  )
                )
              ) : (
                "Nenhuma tarefa encontrada"
              )
            }
            
        <S.ButtonAddItem onClick={() => AddNewTask()}>+</S.ButtonAddItem>
      </S.ContainerList>
    </S.containerTasks>
  );
};

export default ContainerTasks;
