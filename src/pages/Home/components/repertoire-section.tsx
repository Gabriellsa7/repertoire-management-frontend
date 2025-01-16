import { useState } from "react";

interface Repertoires {
  id: string;
  name: string;
  description: string;
}

export const RepertoireSection = () => {
  const [repertoire, setRepertoire] = useState<Repertoires[]>([]);
  return (
    <div className="flex flex-col px-4 py-5 gap-6">
      <div className="flex items-center justify-between">
        <span className="text-primary-text-color font-bold text-base">
          Repertoires
        </span>
        <button className="bg-transparent">
          <span className="text-secondary-text-color font-medium text-xs">
            View More
          </span>
        </button>
      </div>
      <div className="flex gap-3 items-center">
        {repertoire.length > 0
          ? repertoire.map((repertoire) => (
              <div
                key={repertoire.id}
                className="flex justify-center items-center w-16 h-16 bg-gray-100 rounded-xl overflow-hidden"
              >
                <h3 className="text-lg font-bold truncate">
                  {repertoire.name}
                </h3>
                <p className="text-sm text-gray-600 truncate">
                  {repertoire.description}
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
