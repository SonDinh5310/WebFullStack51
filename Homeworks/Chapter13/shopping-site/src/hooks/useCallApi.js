import { useState, useEffect } from "react";

const useCallApi = (input) => {
    const [isLoading, setIsloading] = useState(true);
    const [data, setData] = useState(null);

    const fetchData = () => {
        setTimeout(() => {
            try {
                setData(input);
            } finally {
                setIsloading(false);
            }
        }, 2500);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { isLoading, data };
};

export default useCallApi;
