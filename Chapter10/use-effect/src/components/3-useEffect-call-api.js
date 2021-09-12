import React, { useState, useEffect } from "react";

const API = "https://api.github.com/users";
const UseEffectCallApi = () => {
    const [users, setUsers] = useState([]);
    const getUsers = async () => {
        const response = await fetch(API);
        const users = await response.json();
        setUsers(users);
    };
    useEffect(() => {
        getUsers();
    }, []);
    return (
        <div>
            <h3>Github Users</h3>
            <ul className="user-list">
                {users.map((user) => {
                    return (
                        <li key={user.id}>
                            <div>
                                <h4>{user.login}</h4>
                                <h4>Link github: {user.html_url}</h4>
                            </div>
                            <img src={user.avatar_url} alt="" />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default UseEffectCallApi;
