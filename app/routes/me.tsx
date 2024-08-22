import Social from "~/atomic/molecules/social"
import Article from "~/atomic/organisms/article"

export default function Me () {
    return (
        <>
            <Article>
                <Social />
                <p>Hello World</p>
            </Article>
        </>
    )
}