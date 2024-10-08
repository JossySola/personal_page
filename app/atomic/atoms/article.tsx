export default function Article ({name, document}: {
    name: string,
    document: JSX.Element,
}) {
    return (
        <details className="mb-6 w-full p-6 rounded-lg border shadow-md open:bg-[#314D68] open:text-white transition-all">
            <summary className="font-[Geist] text-center text-xl cursor-pointer list-none rounded-lg md:hover:text-[#4594DF]">{name}</summary>
            <div className="mt-6 mb-3 markdown">{document}</div>
        </details>
    )
}