import getUserLocale from "get-user-locale";
import { useState, useEffect } from "react";

export function useLanguage () {
    const [lang, setLang] = useState("es");
    const userLocale = getUserLocale();
    
    useEffect(() => {
        if (userLocale === "en" || userLocale === "es") {
        setLang(userLocale);
        }
    }, []);

    return lang;
}