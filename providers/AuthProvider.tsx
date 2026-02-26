"use client";

import { Role } from "@/enums/role";
import React, { useState, useContext, createContext } from "react";

interface IAuthContextProps {
  isAuthenticated: boolean;
  role: Role | null;
  login: (role: Role) => void;
  logout: () => void;
  switchRole: () => void;
  userId: string;
}

const AuthContext = createContext<IAuthContextProps | undefined>(undefined);

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [role, setRole] = useState<Role | null>(Role.ADMIN);

  const login = (role: Role) => {
    setIsAuthenticated(true);
    setRole(role);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setRole(null);
  };

  const switchRole = () => {
    setRole((prev) => (prev === Role.ADMIN ? Role.USER : Role.ADMIN));
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, role, login, logout, switchRole, userId: "1" }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
