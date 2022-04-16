import styles from "./CatalogItem.module.scss";

interface ICatalogItemProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  tags?: string[];
}

export default function CatalogItem({
  id,
  title,
  description,
  imageUrl,
  price,
  tags,
}: ICatalogItemProps) {
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
          <h3>{title}</h3>
          <p>{description}</p>
          <div className={styles.item__tags}>
            <div className={styles.item__type}></div>
            <div className={styles.item__price}>R$ {price}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
