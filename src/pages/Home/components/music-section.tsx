import { useState } from "react";

interface Music {
  id: string;
  name: string;
  description: string;
}

export const MusicSection = () => {
  const [music, setMusic] = useState<Music[]>([]);
  return (
    <div className="flex flex-col px-4 py-5 gap-6">
      <div className="flex items-center justify-between">
        <span className="text-primary-text-color font-bold text-base">
          Music
        </span>
        <button className="bg-transparent">
          <span className="text-secondary-text-color font-medium text-xs">
            View More
          </span>
        </button>
      </div>
      <div className="flex gap-3 items-center">
        {music.length > 0
          ? music.map((music) => (
              <div key={music.id} className="p-4 bg-gray-100 rounded-md">
                <h3 className="text-lg font-bold truncate">{music.name}</h3>
                <p className="text-sm text-gray-600 truncate">
                  {music.description}
                </p>
              </div>
            ))
          : ""}
        <button>
          <img src="../../../assets/plus2.png" alt="" />
        </button>
      </div>
    </div>
  );
};
