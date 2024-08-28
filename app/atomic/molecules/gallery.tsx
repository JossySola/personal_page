import { usePictures } from "~/hooks/custom";
import Bullets from "../atoms/bullets";

export default function Gallery () {
    // img array

    // bullets. Update everytime an arrow is clicked based on current index

    // current index
    // prev img
    // current img
    // next img

    const pictures = usePictures("ceramics");
    console.log(pictures.length)
    return (
        <>
            <Bullets />
        </>
    )
}