import styled from "styled-components";
import { livros } from "./databaseRealeases";
import { Title } from "components/Title";
import { RecommendationCard } from "components/RecommendationCard";
import bookImg from "../../assets/livro2.png";

const LatestReleasesContainer = styled.section`
  background-color: #ebecee;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
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
      <Title color="#eb9b00" fontSize="36px">
        Últimos lançamentos
      </Title>
      
      <NewBookContainer>
        {livros.map((livro, index) => (
          <img key={index} src={livro.src} alt={livro.nome} />
        ))}
      </NewBookContainer>

      <RecommendationCard
        title="Talvez você se interesse por..."
        subtitle="Angular 11"
        description="Construindo uma aplicação integrada com a plataforma Google."
        img={bookImg}
      />
    </LatestReleasesContainer>
  );
};
