import options from "./options.json";
import styles from "./Filter.module.scss";

interface IOption {
  id: number;
  name: string;
}

export default function Filter() {
  function selectOption(option: IOption) {}

  return (
    <div className={styles.filters}>
      {options.map((o: IOption) => (
        <button
          className={styles.filters__filter}
          key={o.id}
          onClick={() => selectOption(o)}
        >
          {o.name}
        </button>
      ))}
    </div>
  );
}
