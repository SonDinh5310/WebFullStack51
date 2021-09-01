import React from "react";

class ListItem extends React.Component {
    render() {
        const { cloth, index } = this.props;

        return (
            <div>
                <h1>Clothes {index}</h1>
                <ul>
                    <li>Tên: {cloth.name}</li>
                    <li>Giá: {cloth.price}</li>
                    <li>Màu: {cloth.color}</li>
                    <li>Size: {cloth.size}</li>
                </ul>
            </div>
        );
    }
}

export default ListItem;
