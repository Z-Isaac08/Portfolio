import React from 'react';
import Logo from '../../assets/isaac.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
    return (
        <section className='flex flex-col md:flex-row m-auto p-4 w-11/12 md:w-4/5 items-start'>
            <div className='flex flex-col gap-4 w-full md:w-4/5'>
                <h2 className='text-3xl md:text-5xl font-bold text-primary'>N'cho Sem Ezechiel Isaac</h2>
                <h3 className='text-xl md:text-2xl text-foreground'>
                    Développeur web/mobile full-stack
                </h3>
                <p className='text-base text-foreground font-normal md:w-4/6'>
                    Étudiant en 3e année à l'ESATIC, passionné par la création d’expériences web et mobiles intuitives. En tant que développeur full stack, je maîtrise le front-end et le back-end pour concevoir des solutions complètes et centrées sur l’utilisateur.
                    À la recherche d’un stage en développement mobile et web pour contribuer à une équipe innovante.
                </p>
            </div>
            <div className='flex flex-col items-center justify-center gap-4 mt-4 md:mt-0'>
                <div className="w-fit h-auto border rounded-full p-2">
                    <img src={Logo} alt="Image d'Isaac" className="h-60 w-60 object-cover rounded-full" />
                </div>
                <button type='button' className='flex items-center gap-2 bg-darkerBackground text-foreground rounded-sm p-3'>
                    <FontAwesomeIcon icon={faDownload} className='bg-none' />
                    Mon CV
                </button>
            </div>
        </section>
    );
}

export default Hero;
