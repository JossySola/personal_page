import { ArrowLeftCircle } from "@geist-ui/icons"
import { useNavigate } from "@remix-run/react"

export default function Category ({children}: {
    children: React.ReactNode
}) {
    const navigate = useNavigate();

    return (
        <> 
            <article className="GeistReg flex items-center justify-center mt-6 w-full text-left border-t-2 md:border-none md:w-fit md:max-w-[450px] md:h-screen md:overflow-y-auto">
                <div className="w-fit flex flex-col items-center max-h-screen overflow-y-auto items-center scrollbar-thin scrollbar-thumb-gray-900">
                    <button className="cursor-pointer m-[20px]" onClick={(e) => {
                            e.preventDefault();
                            navigate(-1);
                        }} aria-label="Go Back button">
                        <ArrowLeftCircle size={42}/>
                    </button>
                    {children}
                </div>
                
            </article>
        </>
    )
}