import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // N'oublie pas d'importer les styles AOS

const messages = ["Développeur Web", "Développeur Mobile", "UX/UI Designer"];

const TypingAnimation = () => {
    const [displayedText, setDisplayedText] = useState("");
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

    useEffect(() => {
        // Initialiser AOS
        AOS.init({
            duration: 2000, // Durée de l'animation
            once: true, // L'animation se déclenche une seule fois
        });

        let currentText = "";
        let currentIndex = 0;

        const typeMessage = () => {
            if (currentIndex < messages[currentMessageIndex].length) {
                currentText += messages[currentMessageIndex][currentIndex];
                setDisplayedText(currentText);
                currentIndex++;
                setTimeout(typeMessage, 200); // Vitesse de saisie
            } else {
                setTimeout(() => {
                    setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
                    setDisplayedText("");
                    currentIndex = 0;
                }, 2000); 
            }
        };

        typeMessage();
    }, [currentMessageIndex]);

    return (
        <h3 
            data-aos="fade-up"
            className="text-xl md:text-2xl text-foreground font-bold"
        >
            {displayedText}
        </h3>
    );
};

export default TypingAnimation;
