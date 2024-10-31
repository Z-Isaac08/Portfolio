import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // N'oublie pas d'importer les styles AOS
import ReactJSLogo from '../../assets/react.svg';
import MySQLLogo from '../../assets/mysql.svg';
import TailwindCSSLogo from '../../assets/tailwind-css.svg';
import PrismaLogo from '../../assets/prisma.svg';
import NodeJSLogo from '../../assets/nodejs.svg';
import FirebaseLogo from '../../assets/firebase.svg';
import FlutterLogo from '../../assets/flutter.svg';
import MongoLogo from '../../assets/mongodb.svg';
import SQLogo from '../../assets/sqlite.svg';
import FigmaLogo from '../../assets/figma.svg';

const Skills = () => {
    const [activeTab, setActiveTab] = useState("web");

    const technologies = [
        { logo: ReactJSLogo, name: "ReactJS", tag: "web" },
        { logo: TailwindCSSLogo, name: "Tailwind CSS", tag: "web" },
        { logo: NodeJSLogo, name: "NodeJS(ExpressJS)", tag: "web" },
        { logo: PrismaLogo, name: "Prisma", tag: "web" },
        { logo: MySQLLogo, name: "MySQL", tag: "web" },
        { logo: FlutterLogo, name: "Flutter", tag: "mobile" },
        { logo: FirebaseLogo, name: "Firebase", tag: "mobile" },
        { logo: MongoLogo, name: "MongoDB", tag: "web" },
        { logo: SQLogo, name: "SQLite", tag: "mobile" },
        { logo: FigmaLogo, name: "Figma", tag: "design" },
    ];

    // Filtrer les technologies en fonction de l'onglet actif
    const filteredTechnologies = technologies.filter(
        (tech) => tech.tag === activeTab
    );

    useEffect(() => {
        // Initialiser AOS
        AOS.init({
            duration: 2000, // Durée de l'animation
            once: true, // L'animation se déclenche une seule fois
        });
    }, []);

    return (
        <section className="m-auto p-4 w-11/12 md:w-4/5">
            <h1 
                data-aos="fade-up" // Ajouter une animation AOS
                className='text-xl text-foreground font-medium mb-4 w-fit rounded-md border border-ring bg-darkerBackground p-2'
            >
                Compétences
            </h1>
            <div data-aos="fade-down" className='flex items-center justify-center space-x-5 flex-wrap'>
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
                <button
                    className={`px-4 py-2 ${activeTab === "design" ? "text-foreground text-2xl font-semibold" : ""}`}
                    onClick={() => setActiveTab("design")}
                >
                    UX/UI Design
                </button>
            </div>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredTechnologies.map((tech) => (
                    <div 
                        key={tech.name} 
                        className="flex text-xl text-foreground items-center space-x-4" 
                        data-aos="fade-up" // Ajouter une animation AOS pour chaque technologie
                    >
                        <img src={tech.logo} alt={tech.name} className="h-9 w-9" />
                        <span>{tech.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
