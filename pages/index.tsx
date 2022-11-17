import * as S from "../styles/Home/index";
import ContainerPerfil from "../src/components/containerPerfil";
import ContainerTasks from "../src/components/containerTasks";
import { useAuth } from "../src/hooks/useAuth";
import { useState, useEffect } from "react";

export default function Home() {
  const { User } = useAuth();

  return (
    <S.Container>
      <ContainerPerfil name="teste" />
      <ContainerTasks />
    </S.Container>
  );
}
