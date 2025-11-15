import React, { createContext, useContext, useState, useEffect } from "react";
import api from "../api/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUser({}); // optional: fetch user info from backend if needed
    }
  }, []);

  const login = async (email, password) => {
    const res = await api.post("/api/users/login", { email, password });
    setUser(res.data.user || { email: res.data.email, name: res.data.name });
    localStorage.setItem("token", res.data.token);
  };

  const register = async (name, email, password) => {
    const res = await api.post("/api/users/register", { name, email, password });
    setUser(res.data.user || { email: res.data.email, name: res.data.name });
    localStorage.setItem("token", res.data.token);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);






// import React, { createContext, useContext, useState, useEffect } from "react";
// import api from "../api/api";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   // Check localStorage on mount
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       // Optionally decode token to get user info or call /me endpoint
//       setUser({}); // placeholder
//     }
//   }, []);

//   const login = async (email, password) => {
//     const res = await api.post("/api/auth/login", { email, password });
//     setUser(res.data.user);
//     localStorage.setItem("token", res.data.token);
//   };

//   const register = async (name, email, password) => {
//     const res = await api.post("/api/auth/register", { name, email, password });
//     setUser(res.data.user);
//     localStorage.setItem("token", res.data.token);
//   };

//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem("token");
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, register, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
