import { createContext, useState } from "react";
import toast from "react-hot-toast";
export const authContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const login = (user) => {
    if (user !== "admin") {
      return toast.error("не сьогодні");
    }

    setUser(user);
  };
  const logout = () => setUser("");

  const contextValue = {
    user,
    login,
    logout,
  };

  return (
    <authContext.Provider value={contextValue}>{children}</authContext.Provider>
  );
};
