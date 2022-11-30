import styled from "styled-components";

export const Container = styled.div`
  height: 80vh;
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 3rem;
  background-color: #bbf0ee;
  border-radius: 25px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const containerHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  /* justify-content: ; */
  align-items: center;
  text-align: center;
  /* justify-content: space-between; */
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  width: 100%;
  color: #727272;
`;

export const modal = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
`;

export const containerModal = styled.div`
    width: 80%;
    height:80%;
    background-color: #fff;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
`;

export const taks = styled.div` 
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`;

export const Footer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
`;


export const Button = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: none;
  background-color: #bf2e2e;
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  font-size: 40px;
  font-weight: 300;

  &:hover {
    transition: 300ms;
    scale: 1.1;
    border: 1px solid #727272;
  }
`;

export const textArea = styled.textarea`
    width: 100%;
    height: 50%;
    padding: 50px;
    border: none;
    outline: none;
    resize: none;
    font-size: 1.5rem;
    font-weight: 300;
    padding: 1rem;
    border-radius: 25px;
    background-color: #f0f0f0;
`;


export const buttonSave = styled.button`
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    height: 50px;
    border: none;
    outline: none;
    background-color: #6adde6;
    color: #fff;
    font-size: 1.5rem;
    font-weight: 500;
    border-radius: 25px;
    cursor: pointer;
    &:hover {
        transition: 300ms;
        scale: 1.1;
    }
`;

export const buttonCancel = styled.button`
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    height: 50px;
    border: none;
    outline: none;
    background-color: #bf2e2e;
    color: #fff;
    font-size: 1.5rem;
    font-weight: 500;
    border-radius: 25px;
    cursor: pointer;
    &:hover {
        transition: 300ms;
        scale: 1.1;
    }
`;

export const containerButtons = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
`;

export const inputTitle = styled.input`
    width: 100%;
    height: 50px;
    border: none;
    outline: none;
    font-size: 1.5rem;
    font-weight: 300;
    padding: 1rem;
    border-radius: 25px;
    background-color: #f0f0f0;
`;
