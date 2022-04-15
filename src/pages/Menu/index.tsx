import styles from "./Menu.module.scss";
import logo from "../assets/logo.png";

export default function Menu() {
  return (
    <main>
      <nav className={styles.menu}>
        <img src={logo} alt="iBurger" width="auto" height={60} />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>Kings Burgers & Beers</div>
      </header>
    </main>
  );
}
