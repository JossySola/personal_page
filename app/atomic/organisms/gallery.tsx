import { usePictures } from "~/hooks/custom";
import Bullets from "../atoms/bullets";
import { useEffect, useState } from "react";
import { Loader } from "@geist-ui/icons";
import back from "/back.svg";
import forward from "/forward.svg";
import { useParams } from "@remix-run/react";

export default function Gallery () {
    const params = useParams();
    const [pictures, isFetching] = usePictures(params.folder);
    const [index, setIndex] = useState<number>(0);
    const [width, setWidth] = useState<number>(0);
    // Width is to display the gallery differently between mobile and desktop. The feature is not worked on yet.
    const [current, setCurrent] = useState<undefined | JSX.Element>(undefined)

    // Sets the first image
    useEffect(() => {
        if (current === undefined) {
            setCurrent(pictures && pictures[0] ? pictures[0] : undefined);
        }
    })
    // Sets the device width
    useEffect(() => {
        setWidth(window.screen.width);
    }, [])

    const handleArrows = (arrow: "back" | "next") => {
        if (arrow === "back") {
            const n = pictures[index-1];
            if (n) {
                setCurrent(n);
                setIndex(prev => prev - 1);
            } else {
                return;
            }
        }
        if (arrow === "next") {
            const n = pictures[index+1];
            if (n) {
                setCurrent(n);
                setIndex(prev => prev + 1);
            } else {
                return;
            }
        }
    }
    const backExists = () => {
        if (pictures[index-1]) {
            return true;
        } else {
            return false;
        }
    }
    const nextExists = () => {
        if (pictures[index+1]) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <>
            <h2 className="font-[GeistMed] text-xl">{params.folder?.toUpperCase()}</h2>
            <Bullets quantity={pictures.length} index={index}/>
        
            <div className="inline-flex justify-center content-center">
                <button 
                onClick={(e) => {
                    e.preventDefault();
                    handleArrows("back");
                }} 
                style={{visibility: backExists() ? "visible" : "hidden"}}
                className="z-10 translate-x-[0.7rem]">
                    <img src={back} width={64} height={64}/>
                </button>
                {
                    isFetching ? <div className=" w-[80vw] h-[400px] "><Loader size={64} className="animate-spin"/></div> : current
                }
                <button 
                onClick={(e) => {
                    e.preventDefault();
                    handleArrows("next");
                }} 
                style={{visibility: nextExists() ? "visible" : "hidden"}}
                className="z-10 translate-x-[-0.7rem]">
                    <img src={forward} width={64} height={64}/>
                </button>
            </div>
        </>
    )
}