import * as S from "../../styles/Cadastro/styles";
import { useState } from "react";
// import { Register } from "../../src/services/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../../src/hooks/useAuth";
import { useRouter } from "next/router";

const Cadastro = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPasword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const { resgiter } = useAuth();
  const router = useRouter();

  async function handleRegister() {
    const response = await resgiter({name,email, password, confirmPassword});

    if (response.success) {
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
      <S.ButtonLogin
        type="button"
        onClick={() => router.push("/login")}
      >
      Já possui uma conta? Faça login
      </S.ButtonLogin>
    </S.ContainerForms>
  );
};

export default Cadastro;


