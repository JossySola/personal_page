import Bubble from "../atoms/bubble";
import { useContext } from "react";
import { DataContext } from "~/hooks/context";
import { useLanguage } from "~/hooks/custom";
import Social from "../atoms/social";

export default function Menu () {
    const data = useContext(DataContext);
    const lang = useLanguage();

    const nav = data.nav && data.nav;

    return (
        <nav className="flex flex-col">
            <Social />
            <Bubble text={nav[lang][1]} style="rotate-[-6deg] translate-y-2" url="articles"/>
            <Bubble text={nav[lang][2]} style="rotate-2 translate-y-1" url="art"/>
            <Bubble text={nav[lang][3]} style="rotate-2 translate-y-0.5" url="dev"/>
            <Bubble text={nav[lang][4]} url="contact"/>
        </nav>
    )
}