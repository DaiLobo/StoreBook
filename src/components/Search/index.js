import { Input } from "components/Input";
import { useEffect, useState } from "react";
import { addFavorite } from "services/favoritos";
import { getBooks } from "services/livros";
import styled from "styled-components";

const SearchContainer = styled.section`
  color: #fff;
  text-align: center;
  padding: 85px 0;
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
  margin-top: 20px;
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
  const [booksSearch, setBooksSearch] = useState([]);
  const [books, setBooks] = useState([]);

  async function fetchBooks() {
    const bookApi = await getBooks();
    setBooks(bookApi);
  }

  const insertFavorite = async (id) => {
    await addFavorite(id);

    alert("Livro favoritado!");
  };

  const searchBook = (event) => {
    const result = books.filter((book) =>
      book.nome.includes(event.target.value)
    );
    setBooksSearch(result);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <SearchContainer>
      <Title>Já sabe por onde começar?</Title>
      <Subtitle>Encontre seu livro em nossa estante.</Subtitle>

      <Input placeholder="Escreva sua próxima leitura" onChange={searchBook} />

      {booksSearch.map((book) => (
        <Result key={book.id} onClick={() => insertFavorite(book.id)}>
          <div style={{ marginRight: "16px" }}>
            <p>{book.nome}</p>
            <p style={{ fontSize: "12px" }}>{book.autor}</p>
          </div>
          <img src={book.img} alt={book.nome} />
        </Result>
      ))}
    </SearchContainer>
  );
};
