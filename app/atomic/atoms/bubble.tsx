import { Link } from '@remix-run/react';
import tail from '/tail.svg';

export default function Bubble ({text, style, url}: {
    text: string,
    style?: string,
    url?: string,
}) {

    return (
        <Link to={url ? url : "#"} className='active:scale-125 active:transition-transform w-fit'>
            <span className={`hover:scale-125 
                hover:cursor-pointer
                transition-transform
                bg-[#4594DF] 
                font-[Geist] 
                text-3xl 
                text-white 
                p-2 
                rounded-2xl 
                border-b-solid 
                border-b-2
                border-b-[#30679B]
                border-t-solid
                border-t-2
                border-t-[#FAFAFF]
                inline-block
                relative 
                w-fit
                ${style}`}>
                    <img src={tail} className='absolute left-[-14px] top-[50%] w-4 h-4'/>
                    {text}
            </span>
        </Link>
        
    )
}