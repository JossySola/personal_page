import { Link } from "@remix-run/react"

export default function Preview ({name, url, img}: {
    name: string,
    url: string,
    img: string
}) {
    
    return (
        <>
            <Link to={url} className="inline-block relative bg-black m-0.5">
                <img src={img} 
                title={name} 
                alt={`${name} section preview`} 
                decoding="async"
                width={208}
                height={208}
                className="w-52 h-52 object-cover opacity-80"
                />
                <p className="font-[Amsterdam] w-full text-center text-3xl text-white absolute bottom-0">{name}</p>
            </Link>
        </>
    )
}