import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ContactWidget = ({ logo, title, info, link }) => {
    return (
        <a
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            className='text-foreground flex items-center p-4 border border-ring rounded-lg transition transform hover:scale-105 hover:shadow-lg relative overflow-hidden'
        >
            <div className='flex-shrink-0 mr-4'>
                <FontAwesomeIcon icon={logo} className='h-5 w-5 md:h-7 md:w-7' />
            </div>
            <div className='flex-1'>
                <h3 className='text-base md:text-lg font-bold'>{title}</h3>
                <p className='mt-1 text-sm md:text-base'>{info}</p>
            </div>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='h-4 w-4 md:h-6 md:w-6' />
        </a>
    );
};

export default ContactWidget;
