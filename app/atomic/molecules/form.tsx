import { Form } from "@remix-run/react";

export default function ContactForm () {

    return (
        <Form autoComplete="off" preventScrollReset>
            <input name="name" placeholder="Name" type="text" className="w-full border-2 p-2 mb-2 hover:border-[#30679B] focus:border-[#30679B]" required></input>
            <input name="email" placeholder="E-mail" type="email" pattern="email" className="w-full border-2 p-2 mb-2 hover:border-[#30679B] focus:border-[#30679B]" required></input>
            <input name="subject" placeholder="Subject" type="text" minLength={1} maxLength={30} className="w-full border-2 p-2 mb-2 hover:border-[#30679B] focus:border-[#30679B]" required></input>
            <input name="message" placeholder="Type your message here..." type="text" minLength={1} maxLength={150} className="w-full h-40 border-2 p-2 mb-2 hover:border-[#30679B] focus:border-[#30679B]" required></input>
            <button type="submit">Submit</button>
        </Form>
    )
}