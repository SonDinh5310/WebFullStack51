import React, { forwardRef } from "react";

const Input = (props, ref) => {
    const { field } = props;
    return (
        <div>
            <label
                htmlFor={field}
                className="block text-sm font-medium text-gray-700"
            >
                {field}
            </label>
            <div className="w-full mt-1 rounded-md shadow-sm">
                <input
                    type="text"
                    name={field}
                    id={field}
                    required
                    className=" block w-full h-10 pl-3 pr-3 mb-5 border border-gray-300 sm:text-sm  rounded-md"
                    placeholder="..."
                    ref={ref}
                />
            </div>
        </div>
    );
};

export default forwardRef(Input);
