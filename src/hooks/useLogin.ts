import { useState } from "react";

interface LoginUserProps {
  email: string;
  password: string;
}

export const useLoginUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loginUser = async ({ email, password }: LoginUserProps) => {
    const url = "http://localhost:8080/auth/login";

    if (!email || !password) {
      setError("Please fill out all fields.");
      return false;
    }

    // Start the loading state (e.g., show a spinner)
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();

        if (response.status === 404) {
          setError(errorData.error.message || "Email not Found");
        }
      }

      setIsLoading(false);
      return true;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setIsLoading(false);
      setError(error.message || "Error creating user.");
      return false;
    }
  };

  return { loginUser, isLoading, error };
};
