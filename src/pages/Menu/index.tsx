import { useState } from "react";
import styles from "./Menu.module.scss";
import logo from "../assets/logo.png";
import Search from "./Search";
import Filter from "./Filter";

export default function Menu() {
  const [search, setSearch] = useState("");
  return (
    <main>
      <nav className={styles.navbar}>
        <div className={styles.navbar__imageContainer}>
          <img
            src={logo}
            alt="iBurger"
            width="auto"
            height={60}
            title="iBurger"
          />
          <h1 className={styles.navbar__title}>iBurger</h1>
        </div>
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>Kings Burgers & Beers</div>
      </header>
      <section className={styles.menuSection}>
        <h3 className={styles.menuSection__title}>Highlights</h3>
        <Search search={search} setSearch={setSearch} />
        <div className={styles.menuSection__filter}>
          <Filter />
        </div>
      </section>
    </main>
  );
}