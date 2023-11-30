import { IconsHeader } from "components/IconsHeader";
import { Logo } from "components/Logo";
import { OptionsHeader } from "components/OptionsHeader";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  background-color: #fff;
  justify-content: center;
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
        <Logo />
      </Link>
      <OptionsHeader />
      <IconsHeader />
    </HeaderContainer>
  );
};
