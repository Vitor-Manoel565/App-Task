import * as S from "./styles";
import { useState } from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { AiOutlineCheckSquare } from "react-icons/ai";
import { GiConfirmed } from "react-icons/gi";
import { BiEdit } from "react-icons/bi";
import Item from "../containerList";

interface PropsModal {
  parentCallback: Function;
  closeModal: Function;
  confirmEdit: Function;
}

const ContainerModal: React.FC<PropsModal> = ({
  parentCallback,
  closeModal,
  confirmEdit,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    parentCallback(e.target.value);
    getTitle(e.target.value);
  };
  const [title, getTitle] = useState("");

  return (
    <S.containerModal>
      <S.containerModalContent>
        <AiOutlineCloseSquare
          fill="
      #d45b5b"
          size={50}
          onClick={() => closeModal(false)}
          cursor="pointer"
        />
        <S.inputTitleText required placeholder="Titulo:" onChange={handleChange} />
        <Item title={title} />
        <S.ContainerButton>
            {
                title.length > 0 ? <AiOutlineCheckSquare
                fill="#4f944f"
                size={80}
                cursor="pointer"
                onClick={() => confirmEdit()}
                /> : null

            }
        </S.ContainerButton>
      </S.containerModalContent>
    </S.containerModal>
  );
};

export default ContainerModal;
