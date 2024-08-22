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

export async function getData () {
    try {
        const response = await fetch("https://raw.githubusercontent.com/JossySola/personal_page/main/app/data/data.json");
        return response.json();
    } catch (e) {
        return {
            "location": {
                "en": "",
                "es": ""
            },
            "description": {
                "en": "No data found.",
                "es": "No data found."
            },
            "nav": {
                "en": {
                    "1": "",
                    "2": "",
                    "3": "",
                    "4": ""
                },
                "es": {
                    "1": "",
                    "2": "",
                    "3": "",
                    "4": ""
                }
            }
        }
    }
    
}