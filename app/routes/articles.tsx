import Category from "~/atomic/organisms/category"
import Article from "~/atomic/atoms/article"
import { useMarkdownFiles } from "~/hooks/custom"
import { v4 as uuidv4 } from "uuid"
import "../assets/markdown.css"

export default function Articles () {
    const files = useMarkdownFiles();
    
    return (
        <>
            <Category>
                {
                    files.map((file) => {
                        return file;
                    })
                }
            </Category>
        </>
    )
}