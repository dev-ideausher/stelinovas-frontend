"use client";

import { useState, createContext, useContext } from "react";
import { auth } from "../../config/firebase";
import { onAuthStateChanged, User } from "firebase/auth";

type FirebaseContext = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};
export const FirebaseContext = createContext<FirebaseContext | null>(null);

export const FirebaseProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<User | null>(null);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return (
    <FirebaseContext.Provider value={{ user, setUser }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export const useFirebaseContext = () => {
  const context = useContext(FirebaseContext);
  if (!context) {
    throw new Error(
      "useFirebaseContext must be used within a FirebaseProvider"
    );
  }
  return context;
};
