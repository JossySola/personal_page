import getUserLocale from "get-user-locale";
import { useState, useEffect, useContext } from "react";
import Markdown from "react-markdown";
import { DataContext } from "./context";

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

export function useMarkdownFiles () {
    const [files, setFiles] = useState<Array<JSX.Element>>([]);
    const [names, setNames] = useState<Array<string>>([]);

    const data = useContext(DataContext);
    const lang = useLanguage();
    const articles = data.articles[lang];

    useEffect(() => {
        const fetchMarkdown = async () => {
            articles.map(async (article: string) => {
                const fetched = await fetch(`https://raw.githubusercontent.com/JossySola/personal_page/main/app/data/${article}.md`)
                const text = await fetched.text();
                setFiles(prev => {
                    return [...prev, <Markdown children={text}/>]
                });
                setNames(prev => {
                    return [...prev, article.replaceAll("_", " ").toUpperCase()];
                })
            })
        }

        fetchMarkdown();
    }, [])
    
    return {files, names};
}