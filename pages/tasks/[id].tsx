import { useRouter } from "next/router";
import * as S from "../../styles/viewTask/style";

const Tasks = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <S.Container>
      <S.Title>Task: {id}</S.Title>
    </S.Container>
  );
};

export default Tasks;
