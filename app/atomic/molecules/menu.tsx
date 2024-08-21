import Bubble from "../atoms/bubble";

export default function Menu () {
    return (
        <nav className="flex flex-col">
            <Bubble text="About" style="rotate-2"/>
            <Bubble text="Art" style="rotate-3"/>
            <Bubble text="Web Development" style="rotate-[-3deg]"/>
            <Bubble text="Contact" style="rotate-6 translate-y-2"/>
        </nav>
    )
}