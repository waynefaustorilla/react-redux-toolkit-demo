import { useSelector } from "react-redux";
import { RootState } from "../states/store";

const ProtectedComponent = () => {
  const level = useSelector((state: RootState) => state.nameReducer.user.level);

  return (
    <>
      {
        level == "Admin" ?
          <AdminPage />
          :
          level == "Moderator" ?
            <ModeratorPage/>
            :
            level == "Guest" ?
            <GuestPage/>
            :
            <React.Fragment />
      }
    </>
  );
}

export default ProtectedComponent;