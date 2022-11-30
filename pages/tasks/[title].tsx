import { useRouter } from "next/router";
import * as S from "../../styles/viewTask/style";
import { RiArrowGoBackFill, RiSaveFill } from "react-icons/ri";

import { useState } from "react";

const Tasks = () => {
  const router = useRouter();
  const [scale, setScale] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [text, setText] = useState<string>("");
  const { title } = router.query;

  return (
    <S.Container>
      <S.containerHeader>
        <RiArrowGoBackFill
          fill="#bf2e2e"
          size={35}
          cursor="pointer"
          onClick={() => router.push("/")}
          // width='40%'
        />
        <S.Title>{title}</S.Title>
      </S.containerHeader>
      {showModal ? (
        <S.modal>
          <S.containerModal>
            <S.inputTitle placeholder="Titulo:" type="text"></S.inputTitle>
            <S.textArea
              onChange={(e) => setText(e.target.value)}
              placeholder="Descrição:"
            />
            <S.containerButtons>
              {text.length > 0 ? (
                <S.buttonSave>
                  Save
                  <RiSaveFill size={30} />
                </S.buttonSave>
              ) : null}
              <S.buttonCancel
                onClick={() => [setShowModal(false), setText("")]}
              >
                Voltar
                <RiArrowGoBackFill size={30} />
              </S.buttonCancel>
            </S.containerButtons>
          </S.containerModal>
        </S.modal>
      ) : (
        <S.taks></S.taks>
      )}
      <S.Footer>
        <S.Button onClick={() => setShowModal(true)}>+</S.Button>
      </S.Footer>
    </S.Container>
  );
};

export default Tasks;
