import * as S from "./styles";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TaskTypes } from "../../types/task";
import { log } from "console";
import ContainerModal from "../containerModal";
import Item from "../containerList";
import setItems from "../../../pages/api/setItem";
import deleteItems from "../../../pages/api/deleteItem";
import { useStaks } from "../../hooks/useTasks";
import { useAuth } from "../../hooks/useAuth";
import { taskAtom } from "../../hooks/states";


const ContainerTasks: React.FC = () => {
  const [search, getSearch] = useState("");
  const [tasksList, setTasksList] = useState<TaskTypes[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [Title, getTitle] = useState<string>("");
  const { tasks, CreateTask, RemoveTask } = useStaks();
  const [taskTitle, setTaskTitle] = useState(taskAtom);
  


  // useEffect(() => {
  //   const tasksStorage = localStorage.getItem("tasks");
  //   if (tasksStorage) {
  //     setTasksList(JSON.parse(tasksStorage));
  //   }
  // }, []);

  const parentCallback = (childData: string) => {
    getTitle(childData);
    // setTaskTitle(Title);
  };

  const AddNewTask = async () => {
    await CreateTask(Title);
    setShowModal(false);
  };

  const HandleRemoveTask = async (id: string) => {
    await RemoveTask(id);
  };

  // useEffect(() => {
  //   const tasksStorage = localStorage.getItem("tasks") || "[]";
  //   setTasksList(JSON.parse(tasksStorage));

  // }, []);

  return (
    <S.Container>
      <S.Title>Dashboard</S.Title>
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
        {tasks?.map((item) => {
          return (
            <>
              <Item key={item._id} title={item.title} id={item._id} />
              <S.RemoveItem onClick={() => HandleRemoveTask(item._id)}>
                Remover tarefa
              </S.RemoveItem>
            </>
          );
        })}

        {!tasks?.length && <S.Title>Nenhuma tarefa encontrada</S.Title>}
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
