import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            à propos de moi
          </p>
        </div>

        <p className="text-xl mt-20">
        Développeuse web passionnée. Avec des compétences dans les langages HTML, CSS, JavaScript et PHP.

        Je suis une personne dévouée et motivée qui est toujours à la recherche de nouveaux défis pour affiner 
        mes compétences en développement web. Je m'efforce constamment d'apprendre et de rester à jour avec 
        les dernières tendances et technologies émergentes dans le domaine.
        </p>

        <br />

        <p className="text-xl">
        Mes objectifs ,à l'issue de cette formation sont de savoir créer des structures de base solide 
        pour la conception de site web, maîtriser le CSS afin de donner vie à des designs créatifs 
        en manipulant les styles et les mises en page.Possèder une solide compréhension de JavaScript, 
         pour ajouter des fonctionnalités interactives et dynamiques à mes projets web.

        Compléter mes connaisssances backend, avec le langage PHP, afin de
         développer des fonctionnalités avancées et de travailler avec des bases de données pour créer 
         des sites web dynamiques et personnalisés 
        </p>
      </div>
    </div>
  );
};

export default About;