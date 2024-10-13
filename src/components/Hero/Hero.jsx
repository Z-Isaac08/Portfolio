import React from 'react'
import Logo from '../../assets/exchange.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

const Hero = () => {
    return (
        <section className='flex border m-auto p-4 w-4/5 items-start'>
            <div className='w-4/5 flex flex-col gap-2'>
                <h2 className='text-5xl font-bold text-primary'>N'cho Sem Ezechiel Isaac</h2>
                <h3 className='text-2xl text-foreground'>
                    Developpeur web/mobile full-stack
                </h3>
                <p className='text-base text-foreground font-normal w-4/6'>
                    Étudiant en 3e année, je suis passionné par la création d'expériences web et mobiles intuitives,
                    alliant créativité et compétences techniques pour offrir des solutions centrées sur l'utilisateur.
                </p>
            </div>
            <div className='flex flex-col items-center justify-center gap-4'>
                <div className="w-fit h-auto border rounded-full p-4">
                    <img src={Logo} alt="Image d'Isaac" height={80} width={80} />
                </div>
                <button type='button' className='flex items-center gap-2 bg-darkerBackground text-foreground rounded-sm p-3'>
                    <FontAwesomeIcon icon={faDownload}/>
                    Mon CV
                </button>
            </div>
        </section>
    )
}

export default Hero