import { IconsHeader } from "components/IconsHeader";
import { Logo } from "components/Logo";
import { OptionsHeader } from "components/OptionsHeader";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  background-color: #fff;
  justify-content: center;
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <OptionsHeader />
      <IconsHeader />
    </HeaderContainer>
  );
};
