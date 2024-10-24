import React from 'react';

const Card = ({ projects }) => {
    return (
        <div className='max-w-xs sm:max-w-sm md:max-w-md p-5 text-primary flex flex-col gap-2 border border-transparent rounded-lg transition-all duration-300 hover:border-ring hover:-translate-y-2'>
            <h2 className='text-xl md:text-2xl font-bold'>{projects.name}</h2>
            <p className='text-sm md:text-base'>{projects.desc}</p>
            <a className='text-blue-500 underline hover:text-blue-700' target='_blank' rel="noopener noreferrer" href={projects.link}>Voir le projet</a>
        </div>
    );
}

export default Card;
