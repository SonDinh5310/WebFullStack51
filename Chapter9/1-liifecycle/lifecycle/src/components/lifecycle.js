import React, { Component } from "react";

class Lifecycle extends Component {
    constructor(props) {
        super(props);
        this.state = { action: "" };
        // console.log("1-Constructor");
    }

    static getDerivedStateFromProps() {
        // console.log("2-getDerivedStateFromProps");
        return null;
    }

    componentDidMount() {
        // console.log("4-componentDidMount");
    }

    componentDidUpdate() {
        // console.log("6-componentDidUpdate");
    }

    componentWillUnmount() {
        // console.log("5-componentWillUnmount");
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        // setting order this function
        // console.log("6-shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        // setting order this function
        // console.log("7-getSnapshotBeforeUpdate");
        return null;
    }

    render() {
        // console.log("3-render");
        return <h2>Component Lifecycle</h2>;
    }
}

export default Lifecycle;
