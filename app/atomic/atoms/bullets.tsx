import { v4 as uuidv4 } from "uuid"

export default function Bullets ({quantity, index}: {
    quantity: number,
    index: number,
}) {

    const handleDisplay = () => {
        let bullets: Array<JSX.Element> = [];
        for (let i = 0; i < quantity; i++) {
            if (i === index) {
                bullets.push(<li key={uuidv4()} className="mx-1 float-left text-[#9C9C9C]">●</li>)
            } else {
                bullets.push(<li key={uuidv4()} className="mx-1 float-left text-[#E0E0E0]">●</li>)
            }
        }
        return bullets;
    }

    return (
        <ul className="inline list-none text-base p-0 m-0">
            {handleDisplay()}
        </ul>
    )
}