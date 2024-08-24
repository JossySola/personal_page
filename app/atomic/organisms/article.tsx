import { ArrowLeftCircle } from "@geist-ui/icons"
import { useNavigate } from "@remix-run/react"

export default function Article ({children}: {
    children: React.ReactNode
}) {
    const navigate = useNavigate();

    return (
        <> 
            <article className="GeistReg flex flex-col items-center justify-center  w-full text-left border-t-2 md:border-none md:w-1/4">
                <button style={{cursor: "pointer", marginBottom: 20, marginTop: 20}} onClick={(e) => {
                        e.preventDefault();
                        navigate(-1);
                    }} aria-label="Go Back button">
                    <ArrowLeftCircle />
                </button>
                {children}
            </article>
        </>
    )
}