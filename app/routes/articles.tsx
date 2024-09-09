import Category from "~/atomic/organisms/category"
import { useMarkdownFiles } from "~/hooks/custom"
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