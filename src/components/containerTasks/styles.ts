import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 20px;
  gap: 1rem;
`;

export const containerTasks = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  overflow-y: scroll;
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #bf2e2e;
  }
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  color: #727272;
  font-style: normal;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
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
  /* position: fixed; */
`;

export const ContainerButton = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const RemoveItem = styled.figcaption`
  height: auto;
  width: 100px;
  padding: 2px;
  background-color: #bf2e2e;
  color: white;
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
  font-size: 0.8rem;
  /* position: fixed; */
`;

