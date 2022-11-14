import * as S from '../styles/Home/index';
import ContainerPerfil from '../src/components/containerPerfil';
import ContainerTasks from '../src/components/containerTasks';
import { useAuth } from '../src/hooks/useAuth';


export default function Home() {
  const {User} = useAuth();
  console.log(User);
  
  
  return (
    <S.Container>
      <ContainerPerfil name={User} />
      <ContainerTasks />
    </S.Container>
  )
}
