import logo from "assets/logo.svg";
import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
`;

const LogoImage = styled.img`
  margin-right: 10px;
`;

export const Logo = () => {
  return (
    <LogoContainer>
      <LogoImage src={logo} alt="Logo" className="logo-img" />
      <p>
        <strong>Store</strong>Books
      </p>
    </LogoContainer>
  );
};
