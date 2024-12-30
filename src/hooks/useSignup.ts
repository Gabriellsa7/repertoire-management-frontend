import { useState } from "react";

interface CreateUserProps {
  name: string;
  email: string;
  password: string;
}

export const useCreateUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Function to handle the user creation process
  // It takes an object with the user data (name, email, password)
  const createUser = async ({
    name,
    email,
    password,
  }: CreateUserProps): Promise<boolean> => {
    const url = "http://localhost:8080/user";

    if (!name || !email || !password) {
      setError("Please fill out all fields.");
      return false;
    }

    // Start the loading state (e.g., show a spinner)
    setIsLoading(true);
    setError(null);

    try {
      // Making the POST request to the server
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }), // Sending the user data as JSON
      });

      if (!response.ok) {
        const errorData = await response.json();
        if (
          response.status === 400 &&
          errorData.message === "Email already exists"
        ) {
          setError("Email already registered. Please use a different one.");
        } else {
          setError(errorData.message || "Error creating user");
        }
        throw new Error(errorData.message || "Error creating user");
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
  // Returning the createUser function, loading state, and error state to be used in components
  return { createUser, isLoading, error };
};
