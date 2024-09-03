import { Link } from "@remix-run/react";

export default function GoTo ({url, text = "No text"}: {
    url: string,
    text: string
}) {

    return (
        <Link to={url} className="inline bg-[#5E7992] border-4 border-[#A7D5FF] m-6 p-3 text-white rounded-lg md:border-[#5E7992] md:hover:border-[#A7D5FF] md:transition md:hover:ease-in-out md:delay-100">
            {text}
        </Link>
    )

}