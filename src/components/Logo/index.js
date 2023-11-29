import logo from "assets/logo.svg";
import "./styles.css";

export const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="Logo" className="logo-img" />
      <p>
        <strong>Store</strong>Books
      </p>
    </div>
  );
};
