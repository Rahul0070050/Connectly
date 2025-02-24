import React from "react";

type PROPS = {
  heading: string;
  style?: string;
};
const SubHeading = ({ heading, style }: PROPS) => {
  return <h2 className={`text-2xl font-semibold ${style}`}>{heading}</h2>;
};

export default SubHeading;
