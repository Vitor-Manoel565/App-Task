import * as S from "./styles";
import { useState } from "react";

interface PropsCard {
  title: string;
}

const Item: React.FC<PropsCard> = ({ title }) => {
  return (
    <S.ContainerList>
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
