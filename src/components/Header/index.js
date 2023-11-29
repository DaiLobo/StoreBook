import { IconsHeader } from "components/IconsHeader";
import { Logo } from "components/Logo";
import { OptionsHeader } from "components/OptionsHeader";
import "./styles.css";

export const Header = () => {
  return (
    <header className="App-header">
      <Logo />
      <OptionsHeader />
      <IconsHeader />
    </header>
  );
};
