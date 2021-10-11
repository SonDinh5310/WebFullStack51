export const increaseByOne = () => (dispatch) => {
    dispatch({
        type: "INCREASE",
    });
};

export const decreaseByOne = () => (dispatch) => {
    dispatch({
        type: "DECREASE",
    });
};

export const resetNumber = () => (dispatch) => {
    dispatch({
        type: "RESET",
    });
};
