import React from 'react';
import { useAppDispatch } from '../states/hooks';
import { nameActions } from '../states/reducers/nameReducer';

const TextField: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(nameActions.setName(event.target.value));
  };

  return <input type="text" onChange={handleChange} />;
};

export default TextField;
