/**
 * Ví dụ
 * Khi click vào button submit 3 lần -> hiển thị cảnh báo ko click vào đc nữa
 * Dùng useRef để tính số lần click vào button submit
 */

import React, { useRef, useState } from "react";

const UseRefNoRender = () => {
    const [message, setMessage] = useState("");
    const sent = useRef(0);
    const sendMessage = () => {
        if (sent.current === 3) {
            return alert("Message Limited");
        }

        sent.current += 1;
    };

    return (
        <div>
            <input
                type="text"
                className="message"
                onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default UseRefNoRender;
