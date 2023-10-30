import { Theme } from "components/Theme";

import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>Developers Finder in GitHub</div>
      <Theme />
    </div>
  );
};
