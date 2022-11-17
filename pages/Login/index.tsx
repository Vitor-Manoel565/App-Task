import { useState, useContext } from "react";
import * as S from "../../styles/Login/styles";
import { useAuth } from "../../src/hooks/useAuth";
import { useRouter } from "next/router";
import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  //   const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { singIn } = useAuth();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("Clicou!");

    // setError("");
    // try {
    //   await login(email, password);
    // } catch (error) {
    //   setError("Failed to log in");
    // }
  };

  async function handleLogin() {
    const loginResponse = await singIn({
      email,
      password,
    });

    if (loginResponse.success) {
      toast.success(`${loginResponse.message}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      router.push("/");
    } else {
      return toast.error(`${loginResponse.message}!`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  return (
    <>
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
      <S.ContainerForms onSubmit={handleSubmit}>
        <S.ContainerTitle>Entrar</S.ContainerTitle>
        <S.ContainerInput>
          <S.Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </S.ContainerInput>
        <S.ContainerInput>
          <S.Input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
          />
          <S.showPassword>
            {!showPassword ? (
              <FaEyeSlash
                size={25}
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <IoEyeSharp
                size={25}
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </S.showPassword>
        </S.ContainerInput>
        <S.ButtonSingin type="submit" onClick={() => handleLogin()}>
          Entrar
        </S.ButtonSingin>
        {error && <p>{error}</p>}
      </S.ContainerForms>
    </>
  );
};

export default Login;
