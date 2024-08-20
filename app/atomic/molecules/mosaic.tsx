import Preview from '../atoms/preview'
import Jossy from '../atoms/jossysola'

export default function Mosaic () {
    return (
        <nav className='w-[430px]'>
            <Preview name="Profile" url="#" img="/me.webp"/>
            <Preview name="Contact" url="#" img="/contact.svg"/>
            <Jossy />
            <Preview name="Art" url="#" img="/sculpt.webp"/>
            <Preview name="Code" url="#" img="/code.webp"/>
        </nav>
    )
}