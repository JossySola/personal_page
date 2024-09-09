import getUserLocale from "get-user-locale";
import { useState, useEffect, useContext } from "react";
import Markdown from "react-markdown";
import { DataContext } from "./context";
import { v4 as uuidv4 } from "uuid";
import Article from "~/atomic/atoms/article";

export function useLanguage () {
    const lang = getUserLocale().includes('es') ? "es" : "en";
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
    const data = useContext(DataContext);
    const lang = useLanguage();

    useEffect(() => {
        const fetchMarkdown = async () => {
            const articles = lang.includes('es') ? data.articles['es'] : data.articles['en'];
            const newArticles: Array<JSX.Element> = articles.map(async (article: string) => {
                const fetched = await fetch(`https://raw.githubusercontent.com/JossySola/personal_page/main/app/data/${article}.md`)
                const text = await fetched.text();
                return <Article name={article.replaceAll("_", " ").toUpperCase()} document={<Markdown children={text}/>} key={uuidv4()}/>;
            });
            
            Promise.all(newArticles).then(result => setFiles(result));
        }

        fetchMarkdown();
    }, []);
    return files;
}

export function usePictures (folder: string | undefined): [Array<JSX.Element>, boolean] {
    const [images, setImages] = useState<Array<JSX.Element>>([]);
    const [isFetching, setIsFetching] = useState<boolean>(true);
    const data = useContext(DataContext);
    const imagesObject = data && data.gallery[folder];

    useEffect(() => {
        const fetchPictures = () => {
            for (let image in imagesObject) {
                
                setImages(prev => {
                    return [...prev, 
                    <figure className="w-[80vw] max-w-[400px]">
                        <img src={`https://raw.githubusercontent.com/JossySola/personal_page/main/app/data/pictures/${image}`} alt={imagesObject[image] ? imagesObject[image] : `${folder}'s picture.`} decoding="async"/>
                        <figcaption className="p-3 text-center border-t-0 shadow-md">{imagesObject[image]}</figcaption>
                    </figure>]
                })
            }
            setIsFetching(false);
        }

        fetchPictures();
    }, []);

    return [images, isFetching];
}