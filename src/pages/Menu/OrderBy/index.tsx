import styles from "./OrderBy.module.scss";
import options from "./options.json";
import { useState } from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

interface IOrderByProps {
  orderBy: string | null;
  setOrderBy: React.Dispatch<React.SetStateAction<string>>;
}

export default function OrderBy({
  orderBy,
  setOrderBy,
}: IOrderByProps) {
  const [opened, setOpened] = useState<boolean>(false);
  function getSpanText(orderBy?: string | null) {
    const name = options.find((option) => option.key === orderBy)?.value;
    if (name && name !== "Default") {
      return name;
    }
    return "Order by";
  }
  return (
    <button
      className={`${styles.orderby} ${
        orderBy !== "default" && styles["orderby--active"]
      }`}
      onClick={() => setOpened(!opened)}
      onBlur={() => setOpened(false)}
    >
      <span>{getSpanText(orderBy)}</span>
      {opened ? (
        <MdKeyboardArrowUp size={20} />
      ) : (
        <MdKeyboardArrowDown size={20} />
      )}
      <div
        className={`${styles.orderby__options} ${
          opened === true && styles["orderby__options--active"]
        }`}
      >
        {options.map((option) => (
          <div
            className={styles.orderby__option}
            key={option.key}
            onClick={() => setOrderBy(option.key)}
          >
            {option.value}
          </div>
        ))}
      </div>
    </button>
  );
}
