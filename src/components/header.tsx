import { useEffect, useState } from "react";
import { MdNotificationsNone } from "react-icons/md";

export const Header = () => {
  const [userName, setUserName] = useState("");

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

  return (
    <div className="flex items-center justify-between p-6">
      <div className="flex items-center gap-3">
        <img src="../../assets/headphones32x32.png" alt="headphone icon" />
        <span className="text-primary-text-color font-bold text-base">
          {userName || "Loading..."} {/* Show the name or a fallback */}
        </span>
      </div>
      <div className="flex items-center gap-3">
        <button className="bg-transparent">
          <MdNotificationsNone size={28} color="#009DA2" />
        </button>
        <button className="bg-transparent">
          <div className="w-10 h-10 bg-[#009DA2] text-white rounded-full flex items-center justify-center text-xl">
            {userName.charAt(0).toUpperCase()}
          </div>
        </button>
      </div>
    </div>
  );
};
