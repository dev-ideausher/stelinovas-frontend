"use client";
import React, { useState } from "react";
import { useFirebaseContext } from "../../contexts/firebaseContext";
import { auth } from "../../../config/firebase";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";

function Dropdown() {
  const { user } = useFirebaseContext();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const signOutUser = async () => {
    try {
      await signOut(auth);
      toast.success("User logged out", { position: "top-right" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={handleClick}
        className="bg-transparent px-4 py-2 rounded-full shadow-md text-white outline-none ring-2 ring-blue-500 ring-opacity-50 cursor-pointer"
      >
        {user?.displayName?.split(" ")[0]}{" "}
        {isOpen ? (
          <span className="text-xs ml-1">▼</span>
        ) : (
          <span className="text-xs ml-1">▶</span>
        )}
      </button>
      {isOpen && (
        <ul className="absolute z-10 bg-white mt-2 rounded-lg shadow-md w-40">
          <li
            onClick={() => signOutUser()}
            className="px-4 py-2 text-gray-700 hover:cursor-pointer"
          >
            Logout
          </li>
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
