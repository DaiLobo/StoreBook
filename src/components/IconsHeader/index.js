import styled from "styled-components";
import profile from "../../assets/perfil.svg";
import basket from "../../assets/sacola.svg";

const icons = [profile, basket];

const Icon = styled.li`
  margin-right: 40px;
  cursor: pointer;
  width: 25px;
`;

const Icons = styled.ul`
  display: flex;
  align-items: center;
`;

export const IconsHeader = () => {
  return (
    <Icons>
      {icons.map((icon) => (
        <Icon>
          <img src={icon} alt="Ícone" />
        </Icon>
      ))}
    </Icons>
  );
};
