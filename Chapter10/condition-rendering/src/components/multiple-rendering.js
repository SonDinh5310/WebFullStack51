import React, { useState, useEffect } from "react";

const API = "https://api.github.com/users/anhtbok92";
const MultipleRendering = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [user, setUser] = useState("deafault user");

    useEffect(() => {
        fetch(API)
            .then((response) => {
                if (response.status >= 200 && response.status < 299) {
                    return response.json();
                } else {
                    setIsLoading(false);
                    setIsError(true);
                    throw new Error(response.statusText);
                }
            })
            .then((user) => {
                const { login } = user;
                setUser(login);
                setIsLoading(false);
            })
            .catch((error) => console.log("Error call Api"));
    }, []);

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    if (isError) {
        return <div>Has Error ...</div>;
    }

    return <div>{user}</div>;
};

export default MultipleRendering;
