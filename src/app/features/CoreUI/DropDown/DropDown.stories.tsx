import React from "react";
// import { action } from "@storybook/addon-actions";
import DropDown from "./DropDown";
// import "../../App/Root/Root.scss";

export default {
  component: DropDown,
  title: "DropDown"
};

const oncChange = (options: string) => {
  console.log("option", options);
};
const data = ["Row One", "Row Two", "Row Three"];

export const normal = () => (
  <DropDown options={data} onChange={oncChange}></DropDown>
);

export const multi = () => (
  <DropDown options={data} onChange={oncChange} multiple={true}></DropDown>
);
