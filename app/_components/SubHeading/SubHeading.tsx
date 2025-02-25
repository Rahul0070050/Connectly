import React from "react";

type PROPS = {
  heading: string;
  style?: string;
  ref?: any;
};
const SubHeading = ({ heading, style, ref }: PROPS) => {
  return (
    <h2 ref={ref} className={`text-2xl font-semibold ${style}`}>
      {heading}
    </h2>
  );
};

export default SubHeading;
