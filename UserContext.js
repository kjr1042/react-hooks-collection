import { createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const userData =
    {
        firstName: "Abishek",
        lastName: "sharma"
    }
    return <AppContext.Provider value={userData}>{children}</AppContext.Provider>
}

export {AppContext, AppProvider}