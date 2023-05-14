// Packages
import { useContext } from "react";

// Contexts
import { UserContext } from "../contexts/UserContext";

export default function useUserContext() {
  return useContext(UserContext);
}
