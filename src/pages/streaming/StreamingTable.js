import React from "react";
import styles from "./Table.module.css";

const StreamingTable = ({ item }) => {
  return (
    <>
      <tr>
        <td className={styles.item}>{item.create_at}</td>
        <td className={styles.item}>{item.mafia}</td>
        <td className={styles.item}>{item.road}</td>
      </tr>
    </>
  );
};

export default StreamingTable;
