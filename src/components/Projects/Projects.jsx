import React, { useState } from 'react';
import Card from '../Card/Card';

const Projects = () => {
    const [activeTab, setActiveTab] = useState("web");

    const projects = [
        {
            name: 'Xpense',
            desc: 'Une application intuitive de gestion des dépenses, conçue pour aider les utilisateurs à suivre et à organiser leurs finances personnelles. Xpense permet de catégoriser les dépenses, de définir des budgets et de visualiser les tendances financières pour mieux gérer ses ressources au quotidien.',
            link: 'https://xpense-reactjs.web.app/',
            tag: 'web',
        },
        {
            name: 'FileSA',
            desc: 'Une application pratique qui permet aux utilisateurs de convertir facilement des fichiers d\'un format à un autre. Que ce soit pour des documents, des images ou des vidéos, ce convertisseur offre une interface conviviale, prenant en charge plusieurs formats, tout en garantissant la qualité et la rapidité des conversions.',
            link: 'https://github.com/Isaac1676/MySaas.git',
            tag: 'web',
        },
        {
            name: 'Sushi App',
            desc: 'Une application qui permet aux utilisateurs de commander facilement des sushis en ligne.',
            link: '/',
            tag: 'mobile',
        },
        {
            name: 'ACE FAMILY',
            desc: 'Une application dédiée à l\'enregistrement des participants lors des rencontres de la cellule de prière. Elle simplifie le processus d\'inscription, en permettant aux utilisateurs de s\'enregistrer rapidement.',
            link: 'https://github.com/Isaac1676/ACE_APP.git',
            tag: 'mobile',
        },
        {
            name: 'MyFamily',
            desc: 'Une plateforme ludique où les utilisateurs peuvent créer des enfants virtuels et interagir avec eux dans un environnement familial.',
            link: 'https://github.com/Isaac1676/My_Family.git',
            tag: 'mobile',
        },
        {
            name: 'MacFinder',
            desc: 'Un outil rapide et simple qui permet aux utilisateurs de découvrir le fabricant d\'une adresse MAC. Grâce à cette application, il est facile d\'identifier et de vérifier l\'origine des appareils connectés à un réseau.',
            link: 'https://macfinder.onrender.com/',
            tag: 'web',
        },
    ];

    // Filtrer les projets en fonction de l'onglet actif
    const filteredProjects = projects.filter(
        (projet) => projet.tag === activeTab
    );

    return (
        <section className="m-auto p-4 w-11/12 md:w-4/5">
            <h1 className='text-xl text-foreground font-medium mb-4 w-fit rounded-md border border-ring bg-darkerBackground p-2'>Projets</h1>
            <div className='flex items-center justify-center space-x-5 flex-wrap'>
                <button
                    className={`px-4 py-2 ${activeTab === "web" ? "text-foreground text-2xl font-semibold" : ""}`}
                    onClick={() => setActiveTab("web")}
                >
                    Web
                </button>
                <button
                    className={`px-4 py-2 ${activeTab === "mobile" ? "text-foreground text-2xl font-semibold" : ""}`}
                    onClick={() => setActiveTab("mobile")}
                >
                    Mobile
                </button>
            </div>
            <div className='flex flex-wrap gap-4 items-center justify-center mt-5'>
                {filteredProjects.map((project, index) => (
                    <Card key={index} projects={project} />
                ))}
            </div>
        </section>
    );
}

export default Projects;
