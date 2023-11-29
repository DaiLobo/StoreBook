import { Title } from "components/Title";
import styled from "styled-components";

const Card = styled.div`
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  margin: 0 auto;
  max-width: 600px;
  padding: 25px 20px;
  justify-content: space-around;
  width: 100%;
  margin-top: 40px;
`;

const Botao = styled.button`
  background-color: #eb9b00;
  color: #fff;
  padding: 10px 0px;
  font-size: 16px;
  border: none;
  font-weight: 900;
  display: block;
  text-align: center;
  width: 150px;
  &:hover {
    cursor: pointer;
  }
`;

const Descricao = styled.p`
  max-width: 300px;
`;

const Subtitulo = styled.h4`
  color: #002f52;
  font-size: 18px;
  font-weight: bold;
  margin: 15px 0;
`;

const ImgLivro = styled.img`
  width: 150px;
`;

export const RecommendationCard = ({ title, subtitle, description, img }) => {
  return (
    <Card>
      <div style={{ alignSelf: "start" }}>
        <Title fontSize="16px" color="#eb9b00" alignment="left" padding="0px">
          {title}
        </Title>
        <Subtitulo>{subtitle}</Subtitulo>
        <Descricao>{description}</Descricao>
      </div>
      <div>
        <ImgLivro src={img} alt="livro" />
        <Botao>Saiba mais</Botao>
      </div>
    </Card>
  );
};
