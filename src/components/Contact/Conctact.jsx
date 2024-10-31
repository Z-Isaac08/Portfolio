import React, { useEffect } from 'react';
import ContactWidget from '../Widget/ContactWidget';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import les styles AOS

const Contact = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500, // Durée de l'animation
            once: true, // L'animation se déclenche une seule fois
        }); // Initialiser AOS
    }, []);

    const contacts = [
        {
            logo: faEnvelope, 
            title: 'Email Me',
            info: 'ezechielncho225@gmail.com',
            link: 'mailto:ezechielncho225@gmail.com',
        },
        {
            logo: faPhone, 
            title: 'Appelez-moi',
            info: '+225 0585456593',
            link: 'tel:+2250585456593',
        },
        {
            logo: faLinkedin, 
            title: 'Mon Profil LinkedIn',
            info: 'Découvrez mon parcours',
            link: 'https://www.linkedin.com/in/isaac-n-cho-6a9a2a282/',
        },
    ];

    return (
        <section className='m-auto p-4 w-4/5 rounded-lg'>
            <h2 className='text-xl text-foreground font-medium mb-4 w-fit rounded-md border border-ring bg-darkerBackground p-2' data-aos="fade-up">
                Contactez-moi
            </h2>
            <div className='flex flex-col gap-4'>
                {contacts.map((contact, index) => (
                    <ContactWidget key={index} {...contact} />
                ))}
            </div>
        </section>
    );
};

export default Contact;
