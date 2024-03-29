import { useState, useEffect, useCallback } from "react";

const useFetch = (endpoint, initialFetch = true) => {
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState(null);

  const fetchData = useCallback(
    async (method = "GET", body) => {
      const requestOptions = {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      };

      setStatus("pending");

      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/${endpoint}`,
          requestOptions
        );

        if (!response.ok) throw new Error("Failed to fetch");

        setStatus("resolved");
        const responseData = await response.json();
        setData(responseData);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);
        setStatus("error");
      }
    },
    [endpoint]
  );

  useEffect(() => {
    if (!initialFetch) return;

    fetchData();
  }, [initialFetch, endpoint, fetchData]);

  const execute = useCallback((method, body) => fetchData(method, body), [
    fetchData,
  ]);

  return { status, execute, data, setData };
};

export default useFetch;
