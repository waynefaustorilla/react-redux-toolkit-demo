import React from 'react';
import { useAppSelector } from '../states/hooks';

const AdminPage = () => <h2>Admin</h2>;
const ModeratorPage = () => <h2>Moderator</h2>;
const GuestPage = () => <h2>Guest</h2>;

const ProtectedComponent: React.FC = () => {
  const level = useAppSelector((state) => state.nameReducer.user.level);

  return (
    <>
      {level === 'Admin' ? (
        <AdminPage />
      ) : level === 'Moderator' ? (
        <ModeratorPage />
      ) : level === 'Guest' ? (
        <GuestPage />
      ) : null}
    </>
  );
};

export default ProtectedComponent;
