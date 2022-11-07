import * as S from "./styles";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TaskTypes } from "../../types/task";
import { log } from "console";
import ContainerModal from "../containerModal";
import Item from "../containerList";
interface PropsTasks {
  tasks: string;
}

const ContainerTasks: React.FC<PropsTasks> = ({ tasks }) => {
  const id = uuidv4();
  const [search, getSearch] = useState("");
  const [showTasks, setShowTasks] = useState(false);
  const [tasksList, setTasksList] = useState<TaskTypes[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [Title, getTitle] = useState<any>("");

  // useEffect(() => {
  //   const tasksStorage = localStorage.getItem("tasks");
  //   if (tasksStorage) {
  //     setTasksList(JSON.parse(tasksStorage));
  //   }
  // }, []);

  const parentCallback = (childData: string) => {
    getTitle(childData);
  };

  const AddNewTask = () => {
    const newTask = {
      id: uuidv4(),
      title: Title,
    };
    const oldTasks = tasksList || [];
    const newTasks = [...oldTasks, newTask];
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setTasksList(newTasks);
    console.log(newTasks);
    setShowTasks(true);
    setShowModal(false);
  };

  const removeTask = (id: string) => {
    const newTasks = tasksList.filter((task) => task.id !== id);
    setTasksList(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  useEffect(() => {
    // localStorage.setItem("tasks", JSON.stringify(tasksList));
    const tasksStorage = localStorage.getItem("tasks") || "[]";
    if (tasksStorage) {
      setTasksList(JSON.parse(tasksStorage));
    }
    tasksStorage.length < 0 ? setShowTasks(true) : setShowTasks(false);
  }, []);

  return (
    <S.Container>
      <S.Title>{tasks}</S.Title>
      <S.Search
        placeholder="Search:"
        onChange={(e) => getSearch(e.target.value)}
      />

      {showModal === true ? (
        <ContainerModal
          parentCallback={parentCallback}
          closeModal={setShowModal}
          confirmEdit={AddNewTask}
        />
      ) : null}
      <S.containerTasks>
        {showTasks === true ? (
          tasksList.map((item) => {
            return (
              <>
                <Item key={id} title={item.title} />
                <figcaption onClick={()=>removeTask(item.id)}>Remove Item</figcaption>
              </>
            );
          })
        ) : (
          <>{"Nenhuma tarefa encontrada"}</>
        )}
      </S.containerTasks>
      <S.ContainerButton>
        <S.ButtonAddItem onClick={() => setShowModal(!showModal)}>
          +
        </S.ButtonAddItem>
      </S.ContainerButton>
    </S.Container>
  );
};

export default ContainerTasks;
