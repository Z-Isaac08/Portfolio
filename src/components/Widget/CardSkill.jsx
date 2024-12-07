import React from 'react';

const CardSkill = ({ logo: Logo, name }) => {
    return (
        <div className="flex flex-col text-xl text-foreground items-center space-y-4 p-4 border border-transparent hover:border-foreground hover:shadow-[0_2px_10px_rgba(255,255,255,0.2)] transition-all duration-300 rounded-lg">
            <Logo className="h-8 w-8 md:h-10 md:w-10" />
            <h2>{name}</h2>
        </div>
    );
};


export default CardSkill