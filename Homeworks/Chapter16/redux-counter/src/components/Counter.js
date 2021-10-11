import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseByOne, decreaseByOne, resetNumber } from "../actions";

const Counter = () => {
    // Lấy dữ liệu tù global state bằng cách sử dụng useSelector
    const data = useSelector((state) => {
        console.log("globalState", state);
        return state.counter;
    });
    const dispatch = useDispatch();

    return (
        <div>
            <p>{data}</p>
            <button onClick={() => dispatch(decreaseByOne())}>Decrease</button>
            <button onClick={() => dispatch(resetNumber())}>Reset</button>
            <button onClick={() => dispatch(increaseByOne())}>Increase</button>
        </div>
    );
};

export default Counter;
