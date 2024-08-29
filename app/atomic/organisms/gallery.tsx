import { usePictures } from "~/hooks/custom";
import Bullets from "../atoms/bullets";
import { useState } from "react";

export default function Gallery () {
    const [index, setIndex] = useState<number>(0);
    const [prev, setPrev] = useState(null);
    const [current, setCurrent] = useState();
    const [next, setNext] = useState();

    const pictures = usePictures("ceramics");
  
    return (
        <>
            <Bullets quantity={pictures.length} index={index}/>
        </>
    )
}