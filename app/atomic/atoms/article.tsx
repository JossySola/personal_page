export default function Article ({name, document}: {
    name: string,
    document: JSX.Element,
}) {
    return (
        <details>
            <summary>{name}</summary>
            {document}
        </details>
    )
}