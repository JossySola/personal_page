import "../../assets/article.css";

export default function Article ({name, document}: {
    name: string,
    document: JSX.Element,
}) {
    return (
        <details className="m-3 w-full p-6 bg-[#E0E0E0] rounded-lg">
            <summary className="font-[Geist] text-center text-xl cursor-pointer list-none bg-[#E0E0E0] rounded-lg">{name}</summary>
            {document}
        </details>
    )
}