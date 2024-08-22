import { ArrowLeftCircle } from "@geist-ui/icons"
import { useNavigate } from "@remix-run/react"

export default function Article ({children}: {
    children: React.ReactNode
}) {
    const navigate = useNavigate();

    return (
        <>
            <button style={{cursor: "pointer"}} onClick={(e) => {
                    e.preventDefault();
                    navigate(-1);
                }} aria-label="Go Back button">
                <ArrowLeftCircle />
            </button>
            
            <article className="GeistReg flex-col justify-center  w-full text-left border-t-2 md:border-none">
                {children}
            </article>
        </>
    )
}