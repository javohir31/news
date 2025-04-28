import { createContext, useState } from "react";

export const LanguageContext = createContext ();

function LanguageContextProvider({children}) {
    const [language, setlanguage] = useState('uz')

    function changeLanguageHandler() {
        setlanguage((prev) => (prev == "uz" ? "en" : "uz"));
    }

    const data = {
        language,
        changeLanguageHandler,
    }

    return <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
}

export default LanguageContextProvider;