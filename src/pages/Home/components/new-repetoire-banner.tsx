import { useEffect, useState } from "react";

interface Repertoire {
  id: string;
  name: string;
  description: string;
}

export const NewRepertoireBanner = () => {
  const [repertoires, setRepertoires] = useState<Repertoire[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepertoires = async () => {
      try {
        setLoading(true);
        setError(null);

        const userId = localStorage.getItem("userId");
        if (!userId) {
          throw new Error("User not logged in.");
        }

        // Fetch bands where the user is the leader
        const bandsResponse = await fetch(
          `http://localhost:8080/bands/leader/${userId}`
        );
        if (!bandsResponse.ok) {
          throw new Error("Error fetching bands.");
        }
        const bandsData = await bandsResponse.json();

        // Assuming we list the repertories for the first band found
        if (bandsData.length === 0) {
          throw new Error("No bands found for this user.");
        }
        const bandId = bandsData[0].id; // Pick the first band

        // Fetch the repertoires for the selected band
        const repertoireResponse = await fetch(
          `http://localhost:8080/repertoire/band/${bandId}` // Ajustando a URL conforme o backend
        );
        if (!repertoireResponse.ok) {
          throw new Error("Error fetching repertoires.");
        }
        const repertoireData = await repertoireResponse.json();

        setRepertoires(repertoireData);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        setError(err.message || "Error fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchRepertoires();
  }, []);

  return (
    <div className="flex flex-col gap-5 px-5">
      <div>
        <span className="text-primary-text-color font-bold text-base">
          New Repertoire
        </span>
      </div>
      {loading ? (
        <div className="h-36 bg-gray-100 rounded-xl flex items-center justify-center text-gray-500">
          Loading...
        </div>
      ) : error ? (
        <div className="h-36 bg-gray-100 rounded-xl flex items-center justify-center text-red-500">
          {error}
        </div>
      ) : repertoires.length > 0 ? (
        repertoires.map((repertoire) => (
          <div
            key={repertoire.id}
            className="h-36 bg-white rounded-xl shadow-md p-5"
          >
            <h3 className="font-bold text-lg">{repertoire.name}</h3>
            <p className="text-gray-600">{repertoire.description}</p>
          </div>
        ))
      ) : (
        <div className="h-36 bg-gray-100 rounded-xl flex items-center justify-center text-gray-500">
          No repertoires found for your band.
        </div>
      )}
    </div>
  );
};
