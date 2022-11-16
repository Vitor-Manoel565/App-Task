import styled from "styled-components";

export const ContainerList = styled.div`
  padding: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  cursor: pointer;
`;

export const Item = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: wrap;
  align-items: center;
  gap: 1rem;
  background-color: #d7f5f8;
  border-radius: 20px;
  padding: 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const ContainerProgress = styled.div`
  height: 10px;
  width: 100%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  background-color: gray;
  /* gap: 0.5rem; */
`;

export const LogoItem = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: gray;
`;

export const TitleTask = styled.h1`
  font-size: 1rem;
  font-weight: 500;
  color: #727272;
`;

export const ProgressItem = styled.div`
    height: 80px;
    width: 100%;
    /* background-color: #d9d9d9; */
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    gap: 1rem;
    padding: 1rem;
`;
