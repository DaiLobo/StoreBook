import styled from "styled-components";
import { livros } from "./databaseRealeases";

const LatestReleasesContainer = styled.section`
  background-color: #ebecee;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h2`
  width: 100%;
  padding: 30px 0;
  background-color: #fff;
  color: #eb9b00;
  font-size: 36px;
  text-align: center;
  margin: 0;
`;

const NewBookContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;
`;

export const LatestReleases = () => {
  return (
    <LatestReleasesContainer>
      <Title>Últimos lançamentos</Title>
      <NewBookContainer>
        {livros.map((livro) => (
          <img src={livro.src} alt={livro.nome} />
        ))}
      </NewBookContainer>
    </LatestReleasesContainer>
  );
};
