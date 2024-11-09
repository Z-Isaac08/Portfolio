import React, { useEffect } from 'react';
import Logo from '../../assets/isaac.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import TypingAnimation from '../Typing/typing';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
            once: true,
        });
    }, []);

    return (
        <section className='flex flex-col md:flex-row m-auto p-4 w-11/12 md:w-4/5 items-start'>
            <div className='flex flex-col gap-4 w-full md:w-4/5'>
                <h2 data-aos="fade-up" className='text-3xl md:text-5xl font-bold text-primary'>N'cho Sem Ezechiel Isaac</h2>
                <TypingAnimation />
                <p data-aos="fade-up" className='text-base text-foreground font-normal md:w-4/6'>
                    Étudiant en 3e année à l'ESATIC, passionné par la création d'expériences web et mobiles intuitives. Développeur full-stack,
                    j'allie front-end et back-end pour concevoir des solutions centrées sur l'utilisateur.
                    À la recherche d’un stage en développement mobile et web pour mon projet de fin d’études (PFE).
                </p>
            </div>
            <div data-aos="fade-up" className='flex flex-col items-center justify-center gap-4 mt-4 md:mt-0'>
                <div className="w-fit h-auto border rounded-full p-2">
                    <img src={Logo} alt="Image d'Isaac" className="h-60 w-60 object-cover rounded-full" />
                </div>
                <a href="/ISAAC_N'CHO_CV.pdf" download="ISAAC_N'CHO_CV" className='flex items-center gap-2 bg-darkerBackground text-foreground rounded-sm p-3'>
                    <FontAwesomeIcon icon={faDownload} className='bg-none' />
                    Mon CV
                </a>
            </div>
        </section>
    );
};


export default Hero;
