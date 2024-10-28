import React, { useEffect, useState } from 'react';

const messages = ["Developpeur Web", "Developpeur Mobile", "UX/UI Designer"];

const TypingAnimation = () => {
    const [displayedText, setDisplayedText] = useState("");
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

    useEffect(() => {
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
                    setCurrentMessageIndex((prev) => (prev + 1) % messages.length); // Passer au prochain message
                    setDisplayedText(""); // Réinitialiser le texte affiché
                    currentIndex = 0; // Réinitialiser l'index de caractère
                }, 3000); // Pause avant de passer au prochain message
            }
        };

        typeMessage();
    }, [currentMessageIndex]);

    return (
            <h3 className="text-xl md:text-2xl text-foreground font-bold">
                {displayedText}
                <span className="blinking-cursor"></span>
            </h3>
    );
};

export default TypingAnimation;
