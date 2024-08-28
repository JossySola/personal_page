import { Link } from "@remix-run/react";

export default function GoTo ({url, text = "No text"}: {
    url: string,
    text: string
}) {

    return (
        <Link to={url}>{text}</Link>
    )

}