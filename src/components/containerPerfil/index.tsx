import * as S from "./styles";

interface PropsUser {
  name: string;
}

const ContainerPerfil: React.FC<PropsUser> = ({ name }) => {
  return (
    <S.ContainerHeader>
      <S.ContainerAvatar>
        <S.Avatar />
        <S.Name>{name}</S.Name>
      </S.ContainerAvatar>
      <S.ContainerPerformance>
        <S.TextPerformance>Desempenho</S.TextPerformance>
      </S.ContainerPerformance>
    </S.ContainerHeader>
  );
};

export default ContainerPerfil;
