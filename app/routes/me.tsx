import Social from "~/atomic/atoms/social"
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