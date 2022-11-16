import * as S from "./styles";
import { useState } from "react";
import {useRouter} from "next/router";

interface PropsCard {
  title: string;
  id: string;
}

const Item: React.FC<PropsCard> = ({ title, id }) => {

  const router = useRouter();

  return (
    <S.ContainerList onClick={()=> router.push(`/tasks/${id}`)}>
      <S.Item>
        <S.LogoItem />
        <S.ProgressItem>
          <S.TitleTask>{title}</S.TitleTask>
          <S.ContainerProgress />
        </S.ProgressItem>
      </S.Item>
    </S.ContainerList>
  );
};

export default Item;
