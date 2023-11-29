import profile from "../../assets/perfil.svg";
import basket from "../../assets/sacola.svg";
import "./styles.css";

const icons = [profile, basket];

export const IconsHeader = () => {
  return (
    <ul className="icones">
      {icons.map((icon) => (
        <li className="icone">
          <img src={icon} alt="Ícone" />
        </li>
      ))}
    </ul>
  );
};
