import Nav from "./components/Nav";
import List from "./components/List";
import React, { useState, useEffect, useReducer } from "react";
import InputModal from "./components/InputModal";
import * as Data from "./data.json";

const defaultState = {
    members: Data.default,
    isModalOpen: false,
    modalContent: "",
};

function App() {
    const [store, setStore] = useState([]);
    const [state, dispatch] = useReducer(reducer, defaultState);

    useEffect(() => {
        setStore(Data.default);
        console.log("useEffect store: ", store);
    }, [store]);

    const addMember = (data) => {
        setStore([...store, data]);
        console.log("data: ", data);
        console.log("store ----> ", store);
    };

    return (
        <div className="App">
            <Nav></Nav>
            <InputModal addMember={addMember} />
            <List store={store}></List>
        </div>
    );
}

export default App;
