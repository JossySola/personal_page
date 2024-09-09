import Category from "~/atomic/organisms/category"
import { useMarkdownFiles } from "~/hooks/custom"
import { Loader } from "@geist-ui/icons";
import "../assets/markdown.css"

export default function Articles () {
    const {files, loading} = useMarkdownFiles();
    
    return (
        <>
            <Category>
                {
                    loading ? 
                    <div className="inline-flex justify-center content-center w-[80vw] h-[400px] "><Loader size={64} className="animate-spin"/></div> 
                    : 
                    null
                }
                {
                    files.map((file) => {
                        return file;
                    })
                }
            </Category>
        </>
    )
}