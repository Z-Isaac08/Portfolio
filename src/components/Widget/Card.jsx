import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Card = ({ projects }) => {
    useEffect(() => {
        // Initialiser AOS
        AOS.init({
            duration: 1000, // Durée de l'animation
            once: true, // L'animation se déclenche une seule fois
        });
    }, []);

    return (
        <div className='max-w-xs sm:max-w-sm md:max-w-md p-5 text-primary flex flex-col gap-2 border border-transparent rounded-lg transition-all duration-300 hover:border-ring hover:-translate-y-2'>
            <h2 data-aos='fade-right' className='text-xl md:text-2xl font-bold'>{projects.name}</h2>
            <p data-aos='fade-right' className='text-sm md:text-base'>{projects.desc}</p>
            <a data-aos='fade-right' className='text-blue-500 underline hover:text-blue-700' target='_blank' rel="noopener noreferrer" href={projects.link}>Voir le projet</a>
        </div>
    );
}

export default Card;
