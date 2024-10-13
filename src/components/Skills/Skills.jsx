import React, { useState } from 'react';
import ReactJSLogo from '../../assets/react.svg';
import MySQLLogo from '../../assets/mysql.svg';
import TailwindCSSLogo from '../../assets/tailwind-css.svg';
import PrismaLogo from '../../assets/prisma.svg';
import NodeJSLogo from '../../assets/nodejs.svg';
import FirebaseLogo from '../../assets/firebase.svg';
import FlutterLogo from '../../assets/flutter.svg';

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
    ];

    // Filtrer les technologies en fonction de l'onglet actif
    const filteredTechnologies = technologies.filter(
        (tech) => tech.tag === activeTab
    );

    return (
        <section className="border m-auto p-4 w-4/5">
            <h1 className='text-xl w-fit font-light rounded-md text-primary border border-ring bg-darkerBackground p-2'>Compétences</h1>
            <div className='flex items-center justify-center space-x-5'>
                <button
                    className={`px-4 py-2 ${activeTab === "web" ? "text-foreground text-2xl font-semibold" : ""
                        }`}
                    onClick={() => setActiveTab("web")}
                >
                    Web
                </button>
                <button
                    className={`px-4 py-2 ${activeTab === "mobile" ? "text-foreground text-2xl font-semibold" : ""
                        }`}
                    onClick={() => setActiveTab("mobile")}
                >
                    Mobile
                </button>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
                {filteredTechnologies.map((tech) => (
                    <div key={tech.name} className="flex text-xl text-foreground items-center space-x-4">
                        <img src={tech.logo} alt={tech.name} className="h-9 w-9" />
                        <span>{tech.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
