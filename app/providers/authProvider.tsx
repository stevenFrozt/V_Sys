"use client";

import { createContext, useContext, useState } from "react";

type authContextType = {
  display: displayType | null;
  authData?: tokenData | null;
  setAuthData: React.Dispatch<React.SetStateAction<tokenData | null>>;
  setDisplay: React.Dispatch<React.SetStateAction<displayType | null>>;
};
type displayType = {
  fullName: string;
  nameInitial: string;
};
export type tokenData = {
  account: {
    timestamp: string;
    _id: string;
    student_id: string;
    first_name: string;
    last_name: string;
    birth_date: string;
    strand: string;
    block: string;
    grade_lvl: string;
    password: string;
    role?: string;
  };
  iat: number;
  exp: number;
};

const authContext = createContext<authContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [authData, setAuthData] = useState<tokenData | null>(null);
  const [display, setDisplay] = useState<displayType | null>(null);
  return (
    <authContext.Provider
      value={{ display, setDisplay, authData, setAuthData }}
    >
      {children}
    </authContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(authContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
}
