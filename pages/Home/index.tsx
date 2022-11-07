import * as S from '../../styles/Home/index';
import ContainerPerfil from '../../src/components/containerPerfil';
import ContainerTasks from '../../src/components/containerTasks';

export default function Home() {
  return (
    <S.Container>
      <ContainerPerfil name="Vitor" />
      <ContainerTasks />
    </S.Container>
  )
}
