export default function Profile({location, description} : {
    location: string,
    description: string,
}) {

    return (
        <section className="flex flex-col items-center font-[GeistMed] md:sticky">
            <figure className="inline-flex flex-col items-center">
                <img src="/me.webp" alt="Face picture of myself" className="rounded-full w-32 h-32 object-cover"/>
                <figcaption className="font-[#13293D] font-[Amsterdam] text-5xl text-center">Jossy Solá</figcaption>
                
            </figure>
            <p className="text-[#7A7A7A]">{location}</p>

            <p className="mt-3 flex flex-row text-center">{description}</p>
        </section>
    )
}