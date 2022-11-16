import * as S from "./styles";
import Avatar from "react-avatar";
import { BsFillDoorOpenFill } from "react-icons/bs";
import { useAuth } from "../../hooks/useAuth";

interface PropsUser {
  name?: string;
}

const ContainerPerfil: React.FC<PropsUser> = ({ name }) => {
  const { singOut } = useAuth();
  return (
    <S.ContainerHeader>
      <S.ContainerAvatar>
        <S.Avatar>
          <Avatar name={name} size="100" round={true} />
        </S.Avatar>
        <S.Name>{name}</S.Name>
      </S.ContainerAvatar>
      <S.ContainerPerformance>
        <S.TextPerformance>Desempenho</S.TextPerformance>
      </S.ContainerPerformance>
      <S.ContainerLogout onClick={singOut}>
        <BsFillDoorOpenFill size={30} color="black" cursor="pointer" />
        <S.Logout>Sair</S.Logout>
      </S.ContainerLogout>
    </S.ContainerHeader>
  );
};

export default ContainerPerfil;
