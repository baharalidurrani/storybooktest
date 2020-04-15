import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import styles from "./DropDown.module.scss";
import Checkbox from "../Checkbox/Checkbox";

interface Props {
  options: string[];
  onChange(param: string): void;
  multiple?: boolean;
}
export default function DropDown(props: Props) {
  const [state, setState] = useState({ open: false, value: props.options[0] });
  return (
    <div>
      <div
        className={styles.dropdown}
        onClick={() => setState({ ...state, open: true })}
      >
        {state.value}
      </div>
      <div
        className={styles.options}
        style={{ display: state.open ? "block" : "none" }}
      >
        {props.options.map(option => {
          const handleClick = () => {
            setState({ open: false, value: option });
            props.onChange(option);
          };
          return (
            <div
              key={option}
              onClick={handleClick}
              className={state.value === option ? "active" : undefined}
            >
              {props.multiple ? (
                <Checkbox label={option} onChange={action("changed")} />
              ) : (
                option
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
