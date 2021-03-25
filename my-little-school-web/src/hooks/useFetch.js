import { useState, useEffect, useCallback } from "react";

const useFetch = (url, initialFetch = true) => {
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState(undefined);

  const fetchData = useCallback(
    async (endpoint) => {
      setStatus("pending");
      try {
        // fetch url
        const response = await fetch(url + (endpoint || ""));
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        // get data
        setStatus("resolved");
        const responseData = await response.json();
        setData(responseData);
      } catch (err) {
        // prints error
        // eslint-disable-next-line no-console
        console.error(err);
        setStatus("error");
      }
    },
    [url]
  );

  useEffect(() => {
    if (!initialFetch) return;

    fetchData();
  }, [initialFetch, url, fetchData]);

  const get = useCallback((endpoint) => fetchData(endpoint), [fetchData]);

  return { status, data, get, setData };
};

export default useFetch;
