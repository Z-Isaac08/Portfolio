import React from 'react';
import ContactWidget from '../Card/ContactWidget';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
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
            link: 'https://www.linkedin.com/in/isaac-n-cho-6a9a2a282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
        },
    ];

    return (
        <section className='m-auto p-4 w-4/5 rounded-lg'>
            <h2 className='text-xl text-foreground font-medium mb-4 w-fit rounded-md border border-ring bg-darkerBackground p-2'>Contactez-moi</h2>
            <div className='flex flex-col gap-4'>
                {contacts.map((contact, index) => (
                    <ContactWidget key={index} {...contact} />
                ))}
            </div>
        </section>
    );
};

export default Contact;
