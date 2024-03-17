import { useState, KeyboardEvent } from "react";
import {
  ButtonSearch,
  Container,
  ContainerSearchBar,
  InputSearch,
  Title,
} from "../Search/Search";
import { BsSearch } from "react-icons/bs";

type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};

const Search = ({ loadUser }: SearchProps) => {
  const [userName, setUserName] = useState("");

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      loadUser(userName);
    }
  };

  return (
    <Container>
      <Title>Busque por um usuário:</Title>
      <ContainerSearchBar>
        <InputSearch
          type="text"
          placeholder="Digite o nome do usuário"
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <ButtonSearch onClick={() => loadUser(userName)}>
          <BsSearch />
        </ButtonSearch>
      </ContainerSearchBar>
    </Container>
  );
};

export default Search;
