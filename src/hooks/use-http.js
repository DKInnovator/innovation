import { useState } from "react";
import { useCallback } from "react";

// Submit and retreive data drom database
const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const dbConnect = useCallback(async (requiredConfig, postRequest) => {
    setIsLoading(true);
    try {
      const response = await fetch(requiredConfig.url, {
        method: requiredConfig.method ? requiredConfig.method : "GET",
        headers: requiredConfig.headers ? requiredConfig.headers : {},
        body: requiredConfig.body ? JSON.stringify(requiredConfig.body) : null,
      });

      if (!response.ok) {
        throw new Error("Something went wrong!!!");
      }

      const data = await response.json();
      postRequest(data);
    } catch (error) {
      if (error.message === "Failed to fetch") {
        setError("Unknown error has occured. Please try again!!!");
      } else {
        setError(error.message);
      }
    }

    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    dbConnect,
  };
};

export default useHttp;
