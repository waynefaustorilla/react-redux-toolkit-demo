import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../states/store";

const Heading: React.FunctionComponent = () => {
  const name = useSelector((state: RootState) => state.nameReducer.name);

  return (
    <h1>{name}</h1>
  );
};

export default Heading;