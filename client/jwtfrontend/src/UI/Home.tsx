import { Navigate, useNavigate } from "react-router-dom";
import { UseUser } from "../Context/UserContext";
import Loader from "./Loader";
import { logout } from "../services/apiUser";

const Home: React.FC = () => {
  const { state, dispatch } = UseUser();
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = state;

  if (isLoading) {
    return <Loader />;
  }

  if (!isAuthenticated) {
    return <Navigate to="account/login" replace />;
  } else {
    return (
      <div>
        <h1>Welcome to the Home Page! {state.user?.Fname}</h1>
        <button
          onClick={async () => {
            await logout();
            dispatch({ type: "Logout" });
            navigate("account/login");
          }}
        >
          LOGOUT
        </button>
      </div>
    );
  }
};

export default Home;
