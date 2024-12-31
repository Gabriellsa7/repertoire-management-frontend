import { useEffect, useState } from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import { toast, Toaster } from "react-hot-toast";

export const Profile = () => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("userId"); // Retrieves the user ID stored in localStorage

    if (userId) {
      fetch(`http://localhost:8080/user/${userId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch user data");
          }
          return response.json();
        })
        .then((data) => {
          setUserName(data.name); // Update username
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
          setUserName("Guest"); // Fallback in case of an error
        });
    } else {
      setUserName("Guest"); // Fallback if ID not found
    }
  }, []);

  const handleBackButtonSubmit = () => {
    navigate("/home");
  };

  const handleLogout = () => {
    localStorage.removeItem("userId");

    toast.success("Logout successful!", {
      position: "bottom-right",
      duration: 2000,
    });

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <>
      <Toaster />
      <div className="bg-primary-bg h-screen">
        <div className="flex items-center justify-between p-4">
          <button onClick={handleBackButtonSubmit} className="bg-transparent">
            <IoArrowBackSharp size={34} color="#009DA2" />
          </button>
          <button onClick={handleLogout} className="bg-transparent">
            <FiLogOut size={34} color="#FF2525" />
          </button>
        </div>
        <div className="flex flex-col gap-4 px-16 items-center">
          <div className="w-24 h-24 bg-[#009DA2] text-white rounded-full flex items-center justify-center text-5xl">
            {userName.charAt(0).toUpperCase()}
          </div>
          <span className="text-primary-text-color font-bold text-xl">
            {userName || "Loading..."} {/* Show the name or a fallback */}
          </span>
        </div>
      </div>
    </>
  );
};
