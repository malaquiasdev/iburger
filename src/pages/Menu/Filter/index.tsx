import options from "./options.json";
import styles from "./Filter.module.scss";

interface IOption {
  id: number;
  name: string;
}

interface IProps {
  filter: number | null;
  setFilter: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Filter({ filter, setFilter }: IProps) {
  function selectOption(option: IOption) {
    if (filter === option.id) {
      return setFilter(null);
    }
    return setFilter(option.id);
  }

  return (
    <div className={styles.filters}>
      {options.map((o: IOption) => (
        <button
          className={`${styles.filters__filter} ${
            filter === o.id && styles["filters__filter--active"]
          }`}
          key={o.id}
          onClick={() => selectOption(o)}
        >
          {o.name}
        </button>
      ))}
    </div>
  );
}
