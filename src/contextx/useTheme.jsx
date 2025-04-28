import { createContext, useState } from "react";

export const ThemeContext = createContext ();

function ThemeContextProvider({children}) {
    const [them, setThem] = useState('light')

    function changeThemHandler() {
        setThem((prev) => (prev == "light" ? "dark" : "light"));
    }

    const data = {
        them,
        changeThemHandler,
    }

    return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
}

export default ThemeContextProvider;
