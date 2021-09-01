import React from "react";

class ListItem extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <div>
                <h1>Clothes {this.props.index}</h1>
                <ul>
                    <li>Tên: {this.props.cloth.name}</li>
                    <li>Giá: {this.props.cloth.price}</li>
                    <li>Màu: {this.props.cloth.color}</li>
                    <li>Size: {this.props.cloth.size}</li>
                </ul>
            </div>
        );
    }
}

export default ListItem;
