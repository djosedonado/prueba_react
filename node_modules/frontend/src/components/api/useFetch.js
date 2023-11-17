import { useState, useEffect } from "react";

export function useFetch(url) {
    const [data, setDate] = useState(null)

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setDate(data));
    }, []);
    return { data }
}