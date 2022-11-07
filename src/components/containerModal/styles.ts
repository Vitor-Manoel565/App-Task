import styled from "styled-components";

export const containerModal = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const containerModalContent = styled.div`
  height: 80%;
  width: 80%;
  display: flex;
  flex-direction: column;
  background-color: aliceblue;
  padding: 20px;
  gap: 0.7rem;
  /* gap: 0.5rem; */
`;

export const inputTitleText = styled.input`
  height: 50px;
  width: 100%;
  border: none;
  outline: none;
  font-size: 1.5rem;
  font-weight: 500;
  color: #727272;
  padding: 1rem;
  border-radius: 10px;
  :hover {
    background-color: #f2f2f2;
    box-shadow: 0 0 10px #727272;
    cursor: pointer;
  }
`;

export const Result = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
`;

export const ResultItem = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
    border: 1px solid #727272;
    border-radius: 10px;
    box-shadow: 0 0 10px #727272;
    :hover {
        background-color: #f2f2f2;
        box-shadow: 0 0 10px #727272;
        cursor: pointer;
    }
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