import React from "react";
// import { action } from "@storybook/addon-actions";
import DropDown from "./DropDown";
// import "../../App/Root/Root.scss";

export default {
  component: DropDown,
  title: "DropDown"
};

const data = ["Row One", "Row Two", "Row Three"];

export const normal = () => <DropDown data={data} multiple={false}></DropDown>;

export const multi = () => <DropDown data={data} multiple={true}></DropDown>;
