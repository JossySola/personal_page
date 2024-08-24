import Category from "~/atomic/organisms/category"
import Article from "~/atomic/atoms/article"
import Markdown from "react-markdown"
import { useContext } from "react"
import { DataContext } from "~/hooks/context"
import { useLanguage } from "~/hooks/custom"
import { v4 as uuidv4 } from "uuid"

// IMPORT .MD FILES
import acerca_de_mi from "../data/acerca_de_mi.md"
import about_me from '../data/about_me.md'

export default function Articles () {
    const data = useContext(DataContext);
    const lang = useLanguage();

    // String articles' names
    const articles = data.articles[lang];
    // Has to be in the same order as the array above
    const articlesES = [acerca_de_mi];
    const articlesEN = [about_me];
    
    return (
        <>
            <Category>
                {
                    articles.map((article:string) => {
                        const upper = article.toUpperCase();
                        const clean = upper.replace("_", " ");
                        return <Article name={clean} key={uuidv4()}/>
                    })
                }
                <Markdown children={acerca_de_mi} />
            </Category>
        </>
    )
}