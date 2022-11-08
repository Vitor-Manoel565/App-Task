import * as S from "../../styles/Cadastro/styles";

const Cadastro = () => {
  return (
    <S.ContainerForms>
      <h1>Cadastro</h1>
      <S.Input type="text" placeholder="Nome" />
        <S.Input type="text" placeholder="Email" />
        <S.Input type="password" placeholder="Senha" />
        <S.Input type="password" placeholder="Confirmar Senha" />
        <S.ButtonCadastro type="submit">Cadastrar</S.ButtonCadastro>
    </S.ContainerForms>
  );
};

export default Cadastro;
