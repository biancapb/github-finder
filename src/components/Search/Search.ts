import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(18, 29, 47, 0.25);
  padding: 2rem;
  border-radius: 0.3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 6.25rem;
`;

export const Title = styled.h2`
  font-size: 24px;
`;
export const ContainerSearchBar = styled.div`
  display: flex;
  gap: 1.12rem;
`;

export const InputSearch = styled.input`
  background-color: rgba(22, 27, 34, 0.51);
  padding: 0.6rem;
  border-radius: 5px;
  border: 1px solid #2081f7;

  width: 30vw;
  height: 70px;
`;

export const ButtonSearch = styled.button`
  background-color: #2ea043;

  width: 4vw;
  height: 3.1vh;
  border-radius: 5px;
  border: none;

  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
