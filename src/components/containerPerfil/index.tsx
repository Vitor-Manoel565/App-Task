import * as S from "./styles";
import Avatar from 'react-avatar';

interface PropsUser {
  name?: string;
}

const ContainerPerfil: React.FC<PropsUser> = ({ name }) => {
  return (
    <S.ContainerHeader>
      <S.ContainerAvatar>
        <S.Avatar>
          <Avatar name={name} size="100" round={true}  />
        </S.Avatar>
        <S.Name>{name}</S.Name>
      </S.ContainerAvatar>
      <S.ContainerPerformance>
        <S.TextPerformance>Desempenho</S.TextPerformance>
      </S.ContainerPerformance>
    </S.ContainerHeader>
  );
};

export default ContainerPerfil;
