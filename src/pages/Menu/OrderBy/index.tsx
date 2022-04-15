import styles from "./OrderBy.module.scss";
import options from "./options.json";

interface IOrderByProps {
  orderBy: string | null;
  setOrderBy: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function OrderBy({ orderBy, setOrderBy }: IOrderByProps) {
  return (
    <button className={styles.orderby}>
      <span>Order By</span>
      <div className={styles.orderby__options}>
        {options.map((option) => (
          <div className={styles.orderby__option} key={option.key}>
            {option.value}
          </div>
        ))}
      </div>
    </button>
  );
}
