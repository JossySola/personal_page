import emailjs from '@emailjs/browser';
import { useEffect, useRef, useState } from "react";
import { AlertTriangle } from '@geist-ui/icons';
import getUserLocale from 'get-user-locale';
import { CheckInCircle } from '@geist-ui/icons';

export default function ContactForm () {
    const form = useRef(null);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState('');
    const [sent, setSent] = useState(false);
    const [lang, setLang] = useState('');

    useEffect(() => {
        setLang(() => getUserLocale());
    }, [])

    const service_key = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const template_key = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const public_key = import.meta.env.VITE_EMAILJS_PUBLIC;
    
    emailjs.init({
        publicKey: public_key,
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsPending(true);
        emailjs
            .sendForm(service_key, template_key, form.current, public_key)
            .then(() => {
                //console.log("Success!");
                setIsPending(false);
                setName('');
                setEmail('');
                setSubject('');
                setMessage('');
                setSent(true);
            }, 
            (error) => {
                //console.log("Failed: ", error);
                setError("The message couldn't be sent. Please try again.");
                setIsPending(false);
            }
        )
    }

    return (
        <form ref={form} onSubmit={(e) => handleSubmit(e)} className="w-96 flex flex-col items-center" autoComplete="off">
            <input name="from_name" id='from_name' placeholder={lang === "en" ? "Name" : "Nombre"} type="text" value={name} onChange={e => setName(e.target.value)} className="w-full border-2 p-2 mb-2 hover:border-[#30679B] focus:border-[#30679B] md:w-96" required></input>
            <input name="reply_to" id='reply_to' placeholder="E-mail" type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full border-2 p-2 mb-2 hover:border-[#30679B] focus:border-[#30679B] md:w-96" required></input>
            <input name="subject" id='subject' placeholder={lang === "en" ? "Subject" : "Asunto"} type="text" value={subject} onChange={e => setSubject(e.target.value)} maxLength={30} className="w-full border-2 p-2 mb-2 hover:border-[#30679B] focus:border-[#30679B] md:w-96" required></input>
            <textarea name="message" id='message' placeholder={lang === "en" ? "Type your message here..." : "Escriba su mensaje aquí..."} value={message} onChange={e => setMessage(e.target.value)} maxLength={150} className="w-full h-40 border-2 p-2 mb-2 resize-none overflow-y-scroll hover:border-[#30679B] focus:border-[#30679B] md:w-96" required></textarea>
            {
                error ? 
                    <p className='flex text-[#fc472e] text-center'><AlertTriangle color='#fc472e'/>{error}</p> 
                    : 
                    null
            }
            {
                sent ? <CheckInCircle size={32} color='#417e38'/> : null
            }
            {
                lang === "en" ? 
                    <button type="submit" className="bg-[#314D68] text-white p-3 m-3 rounded w-fit hover:bg-[#4f6a87]">{isPending ? 'Sending...' : 'Submit'}</button>
                    : 
                    <button type="submit" className="bg-[#314D68] text-white p-3 m-3 rounded w-fit hover:bg-[#4f6a87]">{isPending ? 'Enviando...' : 'Enviar'}</button>
            }
        </form>
    )
}