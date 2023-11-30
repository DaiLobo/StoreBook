import { Container } from "components/Container";
import { Title } from "components/Title";
import { useEffect, useState } from "react";
import { getFavoriteBooks, removeFavorite } from "services/favoritos";
import styled from "styled-components";

const ResultContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Result = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  cursor: pointer;
  text-align: center;
  padding: 0 100px;
  p {
    width: 200px;
    color: #fff;
  }
  img {
    width: 100px;
  }
  &:hover {
    border: 1px solid white;
  }
`;

export const Favoritos = () => {
  const [favorites, setFavorites] = useState([]);

  const fetchFavorite = async () => {
    const favoriteBooks = await getFavoriteBooks();

    setFavorites(favoriteBooks);
  };

  const deleteFavorite = async (id) => {
    await removeFavorite(id);

    alert("Livro desfavoritado");
  };

  useEffect(() => {
    fetchFavorite();
  }, [favorites]);

  return (
    <Container>
      <Title fontSize="36px" backgroundcolor="transparent" color="#fff">
        Seus livros favoritos ❤️
      </Title>

      <ResultContainer>
        {favorites.map((favorite, index) => (
          <Result key={index} onClick={() => deleteFavorite(favorite.id)}>
            <p> {favorite.nome} </p>

            <img src={favorite.img} alt={favorite.nome} />
          </Result>
        ))}
      </ResultContainer>
    </Container>
  );
};
