import PropTypes from "prop-types";

import styles from "./Logotipo.module.css";

import logoLight from "../../assets/icons/bv-brand-black-nobg.svg";
import logoDark from "../../assets/icons/bv-brand-white-nobg.svg";

const Logotipo = ({ currentTheme }) => {
  const logo = currentTheme === "dark" ? logoDark : logoLight;
  return (
    <div
      className={styles.Logotipo}
      style={{ backgroundImage: `url(${logo})` }}
    />
  );
};

Logotipo.propTypes = {
  currentTheme: PropTypes.oneOf(["light", "dark"]).isRequired, // Valida o tema como 'light' ou 'dark'
};

export default Logotipo;
