import { ArrowLeft } from "@geist-ui/icons"

export default function Article ({children}: {
    children: React.ReactNode
}) {
    return (
        <>
            <ArrowLeft />
            <article className="GeistReg w-full text-left border-t-2 md:border-none">
                {children}
            </article>
        </>
    )
}