import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // N'oublie pas d'importer les styles AOS
import { FaReact, FaNodeJs, FaFigma } from "react-icons/fa"
import { IoLogoFirebase } from "react-icons/io5";
import { SiMysql, SiSqlite, SiPrisma, SiTailwindcss, SiFlutter, SiFastapi, SiTypescript } from "react-icons/si";
import CardSkill from '../Widget/CardSkill';

const Skills = () => {
    const [activeTab, setActiveTab] = useState("web");

    const technologies = [
        { logo: FaReact, name: "ReactJS", tag: "web" },
        { logo: SiTypescript, name: "TypeScript", tag: "web" },
        { logo: SiTailwindcss, name: "Tailwind CSS", tag: "web" },
        { logo: FaNodeJs, name: "NodeJS(ExpressJS)", tag: "web" },
        { logo: SiPrisma, name: "Prisma", tag: "web" },
        { logo: SiFastapi, name: "FastAPI", tag: "web" },
        { logo: SiMysql, name: "MySQL", tag: "web" },
        { logo: SiFlutter, name: "Flutter", tag: "mobile" },
        { logo: IoLogoFirebase, name: "Firebase", tag: "mobile" },
        { logo: SiSqlite, name: "SQLite", tag: "mobile" },
        { logo: FaFigma, name: "Figma", tag: "design" },
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
                    className={`px-4 py-2 ${activeTab === "web" ? "text-foreground text-xl font-semibold" : ""}`}
                    onClick={() => setActiveTab("web")}
                >
                    Web
                </button>
                <button
                    className={`px-4 py-2 ${activeTab === "mobile" ? "text-foreground text-xl font-semibold" : ""}`}
                    onClick={() => setActiveTab("mobile")}
                >
                    Mobile
                </button>
                <button
                    className={`px-4 py-2 ${activeTab === "design" ? "text-foreground text-xl font-semibold" : ""}`}
                    onClick={() => setActiveTab("design")}
                >
                    UX/UI Design
                </button>
            </div>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredTechnologies.map((tech) => (
                    <CardSkill key={tech.name} name={tech.name} logo={tech.logo}/>
                ))}
            </div>
        </section>
    );
};

export default Skills;
