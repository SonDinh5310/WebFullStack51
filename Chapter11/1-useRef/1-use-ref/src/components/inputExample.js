import React, { forwardRef } from "react";
const Input = (props, ref) => {
    return (
        <div>
            <input type="`text`" ref={ref} />
        </div>
    );
};

export default forwardRef(Input);
