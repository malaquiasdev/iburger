import styles from "./CatalogItem.module.scss";

export default function CatalogItem() {
  return (
    <div className={styles.item}>
      <div className={styles.item__image}>
        <img
          src="https://static-images.ifood.com.br/image/upload/t_low/pratos/8aebf412-c700-4a12-8577-1e4c6b06650d/202012051838_EnlX_.jpeg"
          alt="logo"
          className={styles.item__logo}
        />
      </div>
      <div className={styles.item__description}>
        <div className={styles.item__title}>
          <h3>COMBO CHEESE BACON</h3>
          <p>
            Cheese Bacon (Hambúrguer de 180g, Queijo Prato e Candy Bacon, no Pão
            de Cará) + Batata Chips + 1 Refrigerante
          </p>
          <div className={styles.item__tags}>
            <div className={styles.item__type}></div>
            <div className={styles.item__price}>R$ 20.40</div>
          </div>
        </div>
      </div>
    </div>
  );
}
