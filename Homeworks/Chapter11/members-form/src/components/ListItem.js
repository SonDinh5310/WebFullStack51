import React from "react";

const ListItem = (props) => {
    const { data } = props;
    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">
                    {data.fullName}
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{data.branch}</div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {data.title}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {data.email}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {data.phone}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium cursor-pointer">
                <span className="text-red-600 hover:text-red-800">Remove</span>
            </td>
        </tr>
    );
};

export default ListItem;
