// Packages
import { Navigate } from "react-router-dom";

// Hooks
import useUserContext from "../../hooks/useUserContext";

export default function Dashboard() {
  const { currentUser } = useUserContext();

  return currentUser ? <Navigate to="/" replace /> : <>No user</>;
}
