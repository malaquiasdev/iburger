import styles from "./Catalog.module.scss";
import mock from "./items.json";
import CatalogItem from "./CatalogItem";
import { useState } from "react";
import { useEffect } from "react";

interface ICatalogProps {
  searchText: string;
  filterId: number | null;
  orderBy: string;
}

interface ICatalogItens {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  tags?: string[];
}

interface ICatalog {
  id: number;
  name: string;
  itens: ICatalogItens[];
}

export default function Catalog({
  searchText,
  filterId = 0,
  orderBy = "default",
}: ICatalogProps) {
  const [catalog, setCatalog] = useState<ICatalog[]>(mock);

  function applySearchText(
    searchText: string,
    catalog: ICatalog[]
  ): ICatalog[] {
    if (searchText) {
      const collected: ICatalog[] = [];
      for (const catalogItem of catalog) {
        const colletedItems: ICatalogItens[] = [];
        for (const item of catalogItem.itens) {
          if (
            item.title.toLowerCase().includes(searchText.toLowerCase()) ||
            item.description
              .toLocaleLowerCase()
              .includes(searchText.toLowerCase())
          ) {
            colletedItems.push(item);
          }
        }
        if (colletedItems.length > 0) {
          collected.push({ ...catalogItem, itens: colletedItems });
        }
      }
      return collected;
    }
    return catalog;
  }

  function applyFilter(id: number | null, catalog: ICatalog[]): ICatalog[] {
    if (id) {
      return catalog.filter((item) => item.id === id);
    }
    return catalog;
  }

  function applyOrderBy(orderBy: string, catalog: ICatalog[]): ICatalog[] {
    if (orderBy !== "default") {
      catalog.forEach((item) => {
        item.itens.sort((a, b) => (a.price > b.price ? 1 : -1));
      });
      return [...catalog];
    } else {
      catalog.forEach((item) => {
        item.itens.sort((a, b) => (a.price < b.price ? 1 : -1));
      });
      return [...catalog];
    }
  }

  useEffect(() => {
    console.log("orderBy", orderBy);
    const collected = applySearchText(searchText, mock);
    const filtred = applyFilter(filterId, collected);
    const ordered = applyOrderBy(orderBy, filtred);
    setCatalog(ordered);
  }, [searchText, filterId, orderBy]);

  return (
    <div className={styles.itens}>
      {catalog.map((section) => {
        return (
          <>
            <h2 className={styles.catalog__title}>{section.name}</h2>
            {section.itens.map((item) => {
              return (
                <CatalogItem
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  description={item.description || ""}
                  imageUrl={item.imageUrl || ""}
                  price={item.price}
                  tags={item.tags || []}
                />
              );
            })}
          </>
        );
      })}
    </div>
  );
}
