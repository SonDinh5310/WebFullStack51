import React from "react";
import useCallApi from "../hooks/useCallApi";

const UserList = () => {
    // Call API get danh sach cua user
    const { isLoading, data } = useCallApi(
        "https://5f3fda1244212d0016fed4db.mockapi.io/users"
    );
    console.log("isLoading", isLoading);
    console.log("data", data);

    return (
        <div>
            {isLoading && <div>Loading...</div>}
            {data &&
                data.map((user, index) => {
                    return (
                        <li key={index}>
                            Ho ten: {user.fullName} - SDT: {user.phone}
                        </li>
                    );
                })}
        </div>
    );
};

export default UserList;
