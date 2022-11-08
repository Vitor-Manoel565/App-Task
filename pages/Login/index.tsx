import { useState } from "react";
import * as S from "../../styles/Login/styles";

const Login = () => {
//   const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

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
      <S.ButtonSingin type="submit">Cadastrar-se</S.ButtonSingin>
      {error && <p>{error}</p>}
    </S.ContainerForms>
  );
};

export default Login;
