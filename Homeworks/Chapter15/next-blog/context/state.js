import React, { useState } from "react";

export const AppContext = React.createContext();

export const AppWrapper = ({ children }) => {
    const [data, setData] = useState();
    console.log(data);
    return (
        <AppContext.Provider value={{ data, setData }}>
            {children}
        </AppContext.Provider>
    );
};

// export function useAppContext() {
//     return useContext(AppContext);
// }
