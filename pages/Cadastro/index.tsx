import * as S from "../../styles/Cadastro/styles";
import { useState } from "react";
import { Register } from "../api/Register";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cadastro = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPasword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  async function handleRegister() {
    const response = await Register(name,email, password, confirmPassword);

    if (response.sucess) {
      console.log("Este é o erro",response.message);
      return toast.success(`${response.message}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    //redirect to login page if sucess is true
    return toast.error(`${response.message}`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }


  return (
    <S.ContainerForms>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <h1>Cadastro</h1>
      <S.Input
        type="text"
        placeholder="Nome"
        onChange={(e) => setName(e.target.value)}
      />
      <S.Input
        type="text"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <S.Input
        type="password"
        placeholder="Senha"
        onChange={(e) => setPasword(e.target.value)}
      />
      <S.Input
        type="password"
        placeholder="Confirmar Senha"
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <S.ButtonCadastro type="button" onClick={() => handleRegister()}>
        Cadastrar
      </S.ButtonCadastro>
    </S.ContainerForms>
  );
};

export default Cadastro;


