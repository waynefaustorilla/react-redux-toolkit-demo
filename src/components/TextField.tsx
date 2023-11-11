import React from "react";
import { useDispatch } from "react-redux";
import { nameActions } from "../states/reducers/nameReducer";

const TextField: React.FunctionComponent = () => {
  const dispatch = useDispatch();

  return (
    <input type="text" onChange={(event) => dispatch(nameActions.setName(event.target.value))}/>
  );
};

export default TextField;