import Category from "~/atomic/organisms/category"
import Article from "~/atomic/atoms/article"
import { useMarkdownFiles } from "~/hooks/custom"
import { v4 as uuidv4 } from "uuid"

export default function Articles () {
    const {files, names} = useMarkdownFiles();
    
    return (
        <>
            <Category>
                {
                    files.map((file) => {
                        return names.map((name) => {
                            return <Article name={name} document={file} key={uuidv4()} />
                        })
                    })
                }
            </Category>
        </>
    )
}