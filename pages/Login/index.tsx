import { useState, useContext } from "react";
import * as S from "../../styles/Login/styles";
import { useAuth } from "../../src/hooks/useAuth";
import { useRouter } from "next/router";

const Login = () => {
  //   const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { singIn } = useAuth();
  const router = useRouter();

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

    console.log("Login response", loginResponse);
    

    if (loginResponse) {
      console.log("Login realizado com sucesso");
      router.push("/");
    } else {
      console.log("Erro ao realizar login");
    }
  }

  return (
    <S.ContainerForms onSubmit={handleSubmit}>
      <S.ContainerTitle>Entrar</S.ContainerTitle>
      <S.Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <S.Input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <S.ButtonSingin type="submit" onClick={() => handleLogin()}>
        Cadastrar-se
      </S.ButtonSingin>
      {error && <p>{error}</p>}
    </S.ContainerForms>
  );
};

export default Login;
