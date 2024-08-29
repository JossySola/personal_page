import { usePictures } from "~/hooks/custom";
import Bullets from "../atoms/bullets";
import { useRef, useState } from "react";

export default function Gallery () {
    const [index, setIndex] = useState<number>(0);
    const [prev, setPrev] = useState(null);
    const [current, setCurrent] = useState();
    const [next, setNext] = useState();
    const ref = useRef(0);
    ref.current = window.screen.width;

    const pictures = usePictures("ceramics");
    
    
    if (ref.current === 0 || ref.current < 768) {
        return (
            <>
                <Bullets quantity={pictures.length} index={index}/>
                <p>undefined</p>
            </>
        )
    } else {
        return (
            <>
                <Bullets quantity={pictures.length} index={index}/>
            </>
        )
    }
}