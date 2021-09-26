import React from "react";
import useCallApi from "../hooks/useCallApi";

const UserCard = () => {
    // 1. Call API get thong tin tu db
    const { isLoading, data } = useCallApi(
        "https://5f3fda1244212d0016fed4db.mockapi.io/users/1"
    );
    console.log("isLoading", isLoading);
    console.log("data", data);

    return (
        <div>
            {isLoading && <div>Loading...</div>}
            {data && (
                <div>
                    <h2>Thong tin chi tiet cua user</h2>
                    <p>Ho Ten: {data.fullName}</p>
                    <p>Tuoi: {data.age}</p>
                    <p>Dia chi: {data.address}</p>
                    <p>Phone: {data.phone}</p>
                </div>
            )}
            {/* {!data && <div>Khong the hien thi thong tin nguoi dung</div>} */}
        </div>
    );
};

export default UserCard;
