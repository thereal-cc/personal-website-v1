import { useState } from 'react';

export default function Contact() {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [buttonText, setButtonText] = useState('Send Message');

    const onSubmit = async (event) => {
        event.preventDefault();
        setButtonText('Sending...');

        // Send the email
        const res = await fetch('api/sendEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: email, subject: subject, message: message })
        });
        // Check if the response isn't ok
        const response = await res.json();

        if (response.message != "Email sent successfully") {
            setButtonText('Send Message');
            alert(`Error: ${response.message}`);
            setEmail("");
            setMessage("");
            setSubject("");
            return;
        } 

        // If the response is ok
        setButtonText('Send Message');
        alert('Your message has been sent!');
        setEmail("");
        setMessage("");
        setSubject("");
        return;
    }

    return(
        <div>
            <div className="container mx-auto">
                <section className="bg-transparent">
                    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                        <h2 className="mb-4 text-4xl tracking-tight font-bold text-center text-gray-900 dark:text-white">Contact Me</h2>
                        <form onSubmit={onSubmit} className="space-y-8">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                                <input type="email" id="email" value={email} onChange={(e) => { setEmail(e.target.value); }} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="example@gmail.com" required></input>
                            </div>
                            <div>
                                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                                <input type="text" id="subject" value={subject} onChange={(e) => { setSubject(e.target.value); }} className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="How can I help you?" required></input>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                                <textarea id="message" rows="6" value={message} onChange={(e) => { setMessage(e.target.value); }} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                            </div>
                            <button type="submit" className="btn btn-active btn-primary">{buttonText}</button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
}