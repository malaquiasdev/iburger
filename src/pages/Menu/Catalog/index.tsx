import styles from "./Catalog.module.scss";
import catalog from "./items.json";
import CatalogItem from "./CatalogItem";

export default function Catalog() {
  return (
    <div className={styles.itens}>
      {catalog.map((section) => {
        return (
          <>
            <h2 className={styles.catalog__title}>{section.name}</h2>
            {section.itens.map((item) => {
              return <CatalogItem key={item.id} />;
            })}
          </>
        );
      })}
    </div>
  );
}
