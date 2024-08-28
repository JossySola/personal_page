export default function Article ({name, document}: {
    name: string,
    document: JSX.Element,
}) {
    return (
        <details className="font-[GeistReg] m-3 ">
            <summary className="font-[Geist] text-xl cursor-pointer list-none">{name}</summary>
            {document}
        </details>
    )
}