import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(18, 29, 47, 0.25);
  padding: 2rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
`;
export const ImageAvatar = styled.img`
  width: 140px;
  height: 140px;
  border: 4px solid #1b2026;
  border-radius: 50%;
`;
export const Name = styled.h2``;

export const Location = styled.p`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  svg {
    fill: #4ed8c7;
    font-size: 1.5rem;
  }

  span {
    color: #707881;
    font-weight: bold;
  }
`;

export const ContainerFollow = styled.div`
  display: flex;

  div {
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  div:first-child {
    border-right: 1px solid #707881;
  }
`;
export const Title = styled.p``;

export const ResultFollowers = styled.p`
  background-color: #4ed8c7;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  color: #0d1117;
`;

export const LinkProjects = styled.div`
  width: 200px;
  height: 50px;
  background-color: #000;
  padding: 1rem;
  text-align: center;
  justify-content: center;
  border-radius: 5px;
  opacity: 0.8;
  transition: 0.3s;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }

  span {
    color: #e6edf3;
  }
`;
