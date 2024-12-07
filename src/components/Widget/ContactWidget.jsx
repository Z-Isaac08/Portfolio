import { FaRegArrowAltCircleRight } from "react-icons/fa"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactWidget = ({ logo: Logo, title, info, link }) => {
    useEffect(() => {
        // Initialiser AOS
        AOS.init({
            duration: 1000, // Durée de l'animation
            once: true, // L'animation se déclenche une seule fois
        });
    }, []);

    return (
        <a
            href={link}
            target='_blank'
            rel='noopener noreferrer' // Animation AOS
            className='text-foreground flex items-center p-4 border border-ring rounded-lg transition transform hover:scale-105 hover:shadow-lg relative overflow-hidden'
        >
            <div className='flex-shrink-0 mr-4'>
                <Logo className='h-5 w-5 md:h-7 md:w-7' />
            </div>
            <div  data-aos="zoom-in" className='flex-1'>
                <h3 className='text-base md:text-lg font-bold'>{title}</h3>
                <p className='mt-1 text-sm md:text-base'>{info}</p>
            </div>
            <FaRegArrowAltCircleRight className='h-4 w-4 md:h-6 md:w-6' />
        </a>
    );
};

export default ContactWidget;
