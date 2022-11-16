import styled from "styled-components";

export const ContainerHeader = styled.div`
  height: 100%;
  width: 30%;
  background-color: #f5f5f5;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;

export const ContainerAvatar = styled.div`
  height: auto;
  width: auto;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  color: #727272;
`;

export const Avatar = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  margin-top: 50px;
  background-color: gray;
`;

export const ContainerPerformance = styled.div`
  height: 150px;
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  color: #9c9393;
  background-color: #d9d9d9;
  padding: 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Name = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  color: #727272;
  width: auto;
`;

export const TextPerformance = styled.h1`
  font-size: 1rem;
  font-weight: 500;
  color: #727272;
`;

export const ContainerLogout = styled.div`
  height: auto;
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  color: #9c9393;
`;

export const Logout = styled.h1`
  font-size: 1rem;
  font-weight: 500;
  color: #727272;
  cursor: pointer;
`;

