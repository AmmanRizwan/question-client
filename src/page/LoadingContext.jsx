import React, { createContext, useContext, useState } from "react";

const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {

    const [dataLoading, setDataLoading] = useState(true);

    return (
        <LoadingContext.Provider value={{ dataLoading, setDataLoading}}>
            { children }
        </LoadingContext.Provider>
    )
}

export const useLoading = () => useContext(LoadingContext);