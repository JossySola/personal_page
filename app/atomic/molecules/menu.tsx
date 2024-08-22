import Bubble from "../atoms/bubble";
import { useContext } from "react";
import { DataContext } from "~/hooks/context";
import { useLanguage } from "~/hooks/custom";

export default function Menu () {
    const data = useContext(DataContext);
    const lang = useLanguage();

    const nav = data.nav && data.nav;

    return (
        <nav className="flex flex-col">
            <Bubble text={nav[lang][1]} style="rotate-2" url="me"/>
            <Bubble text={nav[lang][2]} style="rotate-3" url="art"/>
            <Bubble text={nav[lang][3]} style="rotate-[-3deg]" url="dev"/>
            <Bubble text={nav[lang][4]} style="rotate-6 translate-y-1" url="contact"/>
        </nav>
    )
}