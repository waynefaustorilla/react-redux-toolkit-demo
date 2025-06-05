import React from 'react';
import { useAppSelector } from '../states/hooks';

const Heading: React.FC = React.memo(() => {
  const name = useAppSelector((state) => state.nameReducer.name);

  return <h1>{name}</h1>;
});

export default Heading;
