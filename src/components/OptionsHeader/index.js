import styled from "styled-components";

const optionText = ["CATEGORIAS", "MINHA ESTANTE", "FAVORITOS"];

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
        <Option key={index}>{option}</Option>
      ))}
    </Options>
  );
};
