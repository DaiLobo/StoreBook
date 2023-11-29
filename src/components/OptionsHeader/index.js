import "./styles.css";

const optionText = ["CATEGORIAS", "MINHA ESTANTE", "FAVORITOS"];

export const OptionsHeader = () => {
  return (
    <ul className="options">
      {optionText.map((option) => (
        <li className="option">{option}</li>
      ))}
    </ul>
  );
};
