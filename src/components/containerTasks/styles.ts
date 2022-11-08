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
  gap: 0.5rem;
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
    background-color: #6b6666;
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

// -----------styles do modal----------------

// export const containerModal = styled.div`
//   height: 100vh;
//   width: 100vw;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: fixed;
//   top: 0;
//   left: 0;
//   background-color: rgba(0, 0, 0, 0.5);
//   z-index: 999;
// `;

// export const containerModalContent = styled.div`
//   height: 80%;
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   background-color: aliceblue;
//   margin-left: 40vw;
//   padding: 20px;
//   gap: 0.7rem;
//   box-shadow:  0 0 15px 0 rgba(0, 0, 0, 0.7);
//   /* gap: 0.5rem; */
// `;

// export const inputTitleText = styled.input`
//   height: 50px;
//   width: 100%;
//   border: none;
//   outline: none;
//   font-size: 1.5rem;
//   font-weight: 500;
//   color: #727272;
//   padding: 1rem;
//   border-radius: 10px;
//   :hover {
//     background-color: #f2f2f2;
//     box-shadow: 0 0 10px #727272;
//     cursor: pointer;
//   }
// `;

// export const Result = styled.div`
//   height: 100%;
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   gap: 0.5rem;
//   padding: 1rem;
// `;
