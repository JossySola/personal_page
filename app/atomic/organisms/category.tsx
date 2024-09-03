import { ArrowLeftCircle } from "@geist-ui/icons"
import { useNavigate } from "@remix-run/react"

export default function Category ({children}: {
    children: React.ReactNode
}) {
    const navigate = useNavigate();

    return (
        <> 
            <article className="GeistReg flex flex-col items-center justify-center mt-6 w-full text-left border-t-2 md:border-none md:min-w-fit md:w-4/5 md:max-w-[700px]">
                <button className="cursor-pointer m-[20px]" onClick={(e) => {
                        e.preventDefault();
                        navigate(-1);
                    }} aria-label="Go Back button">
                    <ArrowLeftCircle size={42}/>
                </button>
                {children}
            </article>
        </>
    )
}