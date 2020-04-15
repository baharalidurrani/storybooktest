import React, { useState, useEffect } from "react";
import styles from "./DropDown.module.scss";
import classNames from "classnames";
import Checkbox from "../Checkbox/Checkbox";

interface Props {
  data: string[];
  multiple: boolean;
}

export default function DropDown(props: Props) {
  const [selected, setSelected] = useState<number>();
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(false);
  }, [selected]);

  const dropdownContent = classNames(
    styles.dropdownContent,
    show ? styles.dropdownShow : styles.dropdownHidden
  );

  return (
    <div className={styles.dropdown}>
      <button
        className={styles.dropbtn}
        onClick={() => {
          setShow(true);
        }}
      >
        Dropdown
      </button>
      <div className={dropdownContent}>
        <ul>
          {props.data.map((d, i) => {
            return (
              <li
                className={selected === i ? styles.selected : ""}
                onClick={() => {
                  setSelected(i);
                }}
                key={i}
              >
                {props.multiple ? <Checkbox /> : null}
                {d}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
