import React, { forwardRef } from "react";

const InputGroup = (props, ref) => {
    console.log("---> ", ref);
    return (
        <>
            {/* This is Name input */}
            <label
                htmlFor="Name"
                className="block text-sm font-medium text-gray-700"
            >
                Name
            </label>
            <div className="w-full mt-1 rounded-md shadow-sm">
                <input
                    type="text"
                    name="Name"
                    id="Name"
                    required
                    className=" block w-full h-10 pl-3 pr-3 mb-5 border border-gray-300 sm:text-sm  rounded-md"
                    placeholder="..."
                    ref={ref.nameRef}
                />
            </div>
            {/* This is Branch input */}
            <label
                htmlFor="Branch"
                className="block text-sm font-medium text-gray-700"
            >
                Branch
            </label>
            <div className="w-full mt-1 rounded-md shadow-sm">
                <input
                    type="text"
                    name="Branch"
                    id="Branch"
                    required
                    className=" block w-full h-10 pl-3 pr-3 mb-5 border border-gray-300 sm:text-sm  rounded-md"
                    placeholder="..."
                    ref={ref.branchRef}
                />
            </div>
            {/* This is Title input */}
            <label
                htmlFor="Title"
                className="block text-sm font-medium text-gray-700"
            >
                Title
            </label>
            <div className="w-full mt-1 rounded-md shadow-sm">
                <input
                    type="text"
                    name="Title"
                    id="Title"
                    required
                    className=" block w-full h-10 pl-3 pr-3 mb-5 border border-gray-300 sm:text-sm  rounded-md"
                    placeholder="..."
                    ref={ref.titleRef}
                />
            </div>
            {/* This is Email input */}
            <label
                htmlFor="Email"
                className="block text-sm font-medium text-gray-700"
            >
                Email
            </label>
            <div className="w-full mt-1 rounded-md shadow-sm">
                <input
                    type="text"
                    name="Email"
                    id="Email"
                    required
                    className=" block w-full h-10 pl-3 pr-3 mb-5 border border-gray-300 sm:text-sm  rounded-md"
                    placeholder="..."
                    ref={ref.emailRef}
                />
            </div>
            {/* This is Phone input */}
            <label
                htmlFor="Phone"
                className="block text-sm font-medium text-gray-700"
            >
                Phone
            </label>
            <div className="w-full mt-1 rounded-md shadow-sm">
                <input
                    type="text"
                    name="Phone"
                    id="Phone"
                    required
                    className=" block w-full h-10 pl-3 pr-3 mb-5 border border-gray-300 sm:text-sm  rounded-md"
                    placeholder="..."
                    ref={ref.phoneRef}
                />
            </div>
        </>
    );
};

export default forwardRef(InputGroup);
