import { useContext } from "react";
import { authContext } from "../../providers/AuthProvider/AuthProvider";
import { themeContext } from "../../providers/AuthProvider/ThemeProvider/ThemeProvider";

const Header = () => {
  const { user, logout } = useContext(authContext);
  const { toggleTheme, theme } = useContext(themeContext);
  return (
    <header>
      <h2>Hooks | useMemo, useRef, useContext</h2>
      <h2>welcome,{user}</h2>
      <button onClick={toggleTheme}>{theme}</button>
      <button onClick={logout}>Logout</button>
    </header>
  );
};
export default Header;
