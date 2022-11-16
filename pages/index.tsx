import * as S from "../styles/Home/index";
import ContainerPerfil from "../src/components/containerPerfil";
import ContainerTasks from "../src/components/containerTasks";
import { useUserData } from "../src/hooks/useUserData";

export default function Home() {
  const { userData } = useUserData();

  return (
    <S.Container>
      <ContainerPerfil name={userData?.name} />
      <ContainerTasks />
    </S.Container>
  );
}
