import { Input } from "components/Input";
import { useState } from "react";
import styled from "styled-components";
import { books } from "./database";

const SearchContainer = styled.section`
  color: #fff;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
`;
const Title = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;

const Subtitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;

const Result = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  p {
    width: 200px;
  }
  img {
    width: 100px;
  }
  &:hover {
    color: pink;
  }
`;

export const Search = () => {
  const [booksSearch, setBooksSearch] = useState(books);

  const searchBook = (event) => {
    const result = books.filter((book) =>
      book.nome.includes(event.target.value)
    );
    setBooksSearch(result);
  };

  return (
    <SearchContainer>
      <Title>Já sabe por onde começar?</Title>
      <Subtitle>Encontre seu livro em nossa estante.</Subtitle>
      <Input
        placeholder="Escreva sua próxima leitura"
        onChange={searchBook}
      />
      {booksSearch.map((book) => (
        <Result key={book.id}>
          <p>{book.nome} </p>
          <img src={book.src} alt={book.nome} />
        </Result>
      ))}
    </SearchContainer>
  );
};
