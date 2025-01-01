import { useEffect, useState } from "react";

interface Band {
  id: string;
  name: string;
  description: string;
}

export const BandSection = () => {
  const [bands, setBands] = useState<Band[]>([]);

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      console.error("User ID not found");
      return;
    }

    // Fetch bands associated with the user
    fetch(`http://localhost:8080/user/${userId}/bands`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error fetching user bands");
        }
        return response.json();
      })
      .then((data) => setBands(data))
      .catch((error) => console.error(error.message));
  }, []);

  return (
    <div className="flex flex-col px-4 py-5 gap-6">
      <div className="flex items-center justify-between">
        <span className="text-primary-text-color font-bold text-base">
          Bands
        </span>
        <button className="bg-transparent">
          <span className="text-secondary-text-color font-medium text-xs">
            View More
          </span>
        </button>
      </div>
      <div className="flex gap-3 items-center">
        {bands.length > 0
          ? bands.map((band) => (
              <div key={band.id} className="p-4 bg-gray-100 rounded-md">
                <h3 className="text-lg font-bold">{band.name}</h3>
                <p className="text-sm text-gray-600">{band.description}</p>
              </div>
            ))
          : // <button>
            //   <img src="../../../assets/plus.png" alt="" />
            // </button>
            ""}
        <button>
          <img src="../../../assets/plus.png" alt="" />
        </button>
      </div>
    </div>
  );
};
