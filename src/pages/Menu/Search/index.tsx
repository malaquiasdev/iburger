import React from "react";
import { CgSearch } from "react-icons/cg";
import styles from "./Search.module.scss";

interface ISearchProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function Search({ search, setSearch }: ISearchProps) {
  return (
    <div className={styles.search}>
      <CgSearch size={20} color="#4C4D5E"></CgSearch>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="search for an item"
      />
    </div>
  );
}
