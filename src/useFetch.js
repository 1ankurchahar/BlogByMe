import { useState, useEffect } from "react";

const useFetch = (URL) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(URL, { signal: abortCont.signal })
                .then((res) => {
                    if (!res.ok) {
                        throw Error("could not fetch blogs for that data");
                    }
                    return res.json();
                })
                .then((data) => {
                    setData(data);
                    setIsLoading(false);
                    setError(null);
                })
                .catch((err) => {
                    if (err.name === "AbortError") console.log("Fetch Aborted");
                    else {
                        setError(err.message);
                        setIsLoading(false);
                    }
                });
        }, 1000);

        return () => abortCont.abort();
    }, [URL]);

    return {
        data,
        isLoading,
        error,
    };
};

export default useFetch;
