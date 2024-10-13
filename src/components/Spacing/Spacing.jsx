const Spacing = ({ size = "md" }) => {
    let spacingClass = "my-6"; // Classe par défaut pour espacement vertical

    // Définir les tailles en fonction de l'option choisie
    if (size === "sm") spacingClass = "my-3"; // Petit espacement
    if (size === "lg") spacingClass = "my-9"; // Grand espacement

    return <div className={spacingClass}></div>;
};

export default Spacing;
