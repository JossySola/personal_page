import { Link } from "@remix-run/react";

export default function GoTo ({url, text = "No text"}: {
    url: string,
    text: string
}) {

    return (
        <Link to={url} className="inline bg-[#314D68] text-white p-3 m-3 rounded w-fit hover:bg-[#4f6a87]">
            {text}
        </Link>
    )

}