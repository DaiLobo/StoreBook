import { NavLink } from "react-router-dom";
import styled from "styled-components";

const optionText = [
  { title: "CATEGORIAS", link: "/categorias" },
  { title: "MINHA ESTANTE", link: "/minhaestante" },
  { title: "FAVORITOS", link: "/favoritos" },
];

const Option = styled.li`
  height: 100%;
  display: flex;
  padding: 0 5px;
  cursor: pointer;
  font-size: 16px;
  min-width: 120px;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const Options = styled.ul`
  display: flex;
`;

export const OptionsHeader = () => {
  return (
    <Options>
      {optionText.map((option, index) => (
        <NavLink key={index} to={option.link} end style={{ textDecoration: "none", color: "#000" }}>
          <Option>{option.title}</Option>
        </NavLink>
      ))}
    </Options>
  );
};
