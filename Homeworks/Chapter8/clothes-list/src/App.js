import React from "react";
import ListItem from "./components/ListItem";

const clothes = [
    {
        name: "Quan kaki",
        price: "200000",
        color: "Nâu",
        size: "XL",
    },
    {
        name: "Váy 2 dây",
        price: "300000",
        color: "Trắng",
        size: "M",
    },
    {
        name: "Áo Polo",
        price: "300000",
        color: "Xanh biển",
        size: "L",
    },
    {
        name: "Quan short",
        price: "100000",
        color: "Đen",
        size: "XXL",
    },
];

function App() {
    return (
        <div>
            <h1>Danh sách quần áo</h1>
            {clothes.map((cloth, index) => {
                return (
                    <ListItem
                        cloth={cloth}
                        index={index}
                        key={index}
                    ></ListItem>
                );
            })}
        </div>
    );
}

export default App;
