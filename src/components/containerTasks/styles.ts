import styled from "styled-components";

export const containerTasks = styled.div`
  height: 90%;
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 2rem;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  color: #727272;
`;

export const Search = styled.input`
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background-color: #d7f5f8;
  border-radius: 20px;
  color: #9c9393;
  :placeholder {
    color: #9c9393;
    font-size: 1.5rem;
  }
  border: none;
  outline: none;
  &:focus {
    box-shadow: 0px 0px 16px #2d7c837a;
  }
`;

export const ContainerList = styled.div`
  padding: 10px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
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

export const LogoItem = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: gray;
`;

export const ContainerProgress = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: column;
  /* gap: 0.5rem; */
`;

export const TitleTask = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  color: #727272;
`;

export const ProgressItem = styled.div`
  height: 10px;
  width: 100%;
  background-color: #d9d9d9;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
`;

export const ProgressText = styled.h4`
  font-size: 1.5rem;
  font-weight: 500;
  color: #6adde6;
`;


export const ButtonAddItem = styled.button`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: #6adde6;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  &:hover {
    box-shadow: 0px 0px 16px #2d7c837a;
  }
  font-size: 1.8rem;
`;