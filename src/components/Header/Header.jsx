import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Header = () => {
    useEffect(() => {
        // Initialiser AOS
        AOS.init({
            duration: 1500, // Durée de l'animation
            once: true, // L'animation se déclenche une seule fois
        });
    }, []);

    return (
        <header className='flex items-center justify-between m-auto top-0 sticky p-4 w-4/5 z-50'>
            <h1 data-aos="fade-down" className='text-3xl md:text-4xl font-bold text-foreground'>Isaac N'cho</h1>
            <div data-aos="fade-down" className='flex items-center space-x-4'>
                <Link to='https://github.com/Z-Isaac08' target='_blank' rel='noopener noreferrer'>
                    <FontAwesomeIcon icon={faGithub} className='text-foreground h-6 w-6 md:h-8 md:w-8' />
                </Link>
                <Link to='https://www.linkedin.com/in/isaac-n-cho-6a9a2a282/' target='_blank' rel='noopener noreferrer'>
                    <FontAwesomeIcon icon={faLinkedin} className='text-foreground h-6 w-6 md:h-8 md:w-8' />
                </Link>
            </div>
        </header>
    );
};

export default Header;
