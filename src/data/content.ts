export type Language = 'en' | 'fr';

export const content = {
    en: {
        nav: {
            home: 'Home',
            creations: 'Creations',
        },
        hero: {
            role: 'Engineer Architect',
            description: 'Project management from design to delivery. Ensuring technical and architectural quality across all phases.',
            cta: 'View Creations',
        },
        about: {
            architecture: {
                title: 'Architecture',
                desc: 'Dual background in Engineering and Architecture.',
            },
            programManagement: {
                title: 'Program Management',
                desc: 'Project management focused on hospitality.',
            },
            profile: {
                title: '28 Years Old',
                desc: 'Driven by creating impactful spaces.',
            },
        },
        experience: {
            title: 'Experience',
            items: [
                {
                    company: 'Vinci Immobilier',
                    role: 'Real Estate Program Manager',
                    period: 'Since 2024',
                    description: 'Development of real estate projects in hospitality. Managing complex programs with high standards.',
                    link: 'https://www.vinci-immobilier.com/',
                },
                {
                    company: 'Linkcity',
                    role: 'Real Estate Program Manager',
                    period: '2022 - 2023',
                    description: 'Management of multi-program projects (residential, offices, services). Coordinating diverse stakeholders.',
                    link: 'https://www.linkcity.com/',
                },
                {
                    company: 'OGIC',
                    role: 'Deputy Program Manager',
                    period: '2021',
                    description: 'Introduction to real estate development on mixed-use operations. Assisting in administrative and technical monitoring.',
                    link: 'https://www.ogic.fr/',
                },
                {
                    company: 'Tractebel',
                    role: 'Assistant Engineer',
                    period: '2020',
                    description: 'Technical studies and structural analysis for civil engineering projects.',
                    link: 'https://tractebel-engie.fr/',
                },
            ],
        },
        education: {
            title: 'Education',
            items: [
                {
                    school: 'École Nationale d\'Architecture de Lyon',
                    degree: 'State Diploma of Architect',
                    period: '2017 - 2022',
                    description: 'Architectural design and urban planning studies.',
                    link: 'https://www.lyon.archi.fr/',
                },
                {
                    school: 'INSA Lyon',
                    degree: 'Engineering Diploma - Civil Engineering',
                    period: '2015 - 2020',
                    description: 'Civil engineering and urban planning curriculum.',
                    link: 'https://www.insa-lyon.fr/',
                },
            ],
        },
        creations: {
            title: 'Creations',
            digitalTitle: 'Digital & 3D Art',
            architectureTitle: 'Architecture (PFE)',
            blenderContext: 'Expression of the imaginary.',
            pfeContext: 'Mayotte, a neglected territory, a land of all challenges, of the imperious necessity to act.',
            viewBoard: 'View Project Board',
        },
        footer: {
            reachOut: 'Contact',
            crafted: 'Crafted with curiosity',
        },
    },
    fr: {
        nav: {
            home: 'Accueil',
            creations: 'Créations',
        },
        hero: {
            role: 'Ingénieur Architecte',
            description: 'Suivi des projets de la conception à la livraison. Gestion des aspects techniques et administratifs pour garantir la qualité architecturale.',
            cta: 'Voir les Créations',
        },
        about: {
            architecture: {
                title: 'Architecture',
                desc: 'Double cursus Ingénieur et Architecte.',
            },
            programManagement: {
                title: 'Management de Projet',
                desc: 'Gestion de projet hôtelier.',
            },
            profile: {
                title: '28 Ans',
                desc: 'Passionné par la création d\'espaces.',
            },
        },
        experience: {
            title: 'Expérience',
            items: [
                {
                    company: 'Vinci Immobilier',
                    role: 'Responsable de programme immobilier',
                    period: 'Depuis 2024',
                    description: 'Développement de projets d\'hôtellerie. Pilotage d\'opérations complexes exigeant une haute qualité de réalisation.',
                    link: 'https://www.vinci-immobilier.com/',
                },
                {
                    company: 'Linkcity',
                    role: 'Responsable de programme immobilier',
                    period: '2022 - 2023',
                    description: 'Gestion de projets multi-programmation (logements, bureaux, commerces). Coordination des différents acteurs pour un développement urbain cohérent.',
                    link: 'https://www.linkcity.com/',
                },
                {
                    company: 'OGIC',
                    role: 'Responsable de programmes adjoint',
                    period: '2021',
                    description: 'Découverte du métier de la promotion immobilière sur des opérations mixtes. Appui au suivi administratif et technique des projets.',
                    link: 'https://www.ogic.fr/',
                },
                {
                    company: 'Tractebel',
                    role: 'Ingénieur assistant',
                    period: '2020',
                    description: 'Études techniques et analyses structurelles pour des ouvrages de génie civil.',
                    link: 'https://tractebel-engie.fr/',
                },
            ],
        },
        education: {
            title: 'Formation',
            items: [
                {
                    school: 'École Nationale d\'Architecture de Lyon',
                    degree: 'Diplôme d\'Etat d\'Architecte',
                    period: '2017 - 2022',
                    description: 'Études d\'architecture axées sur la conception et l\'urbanisme.',
                    link: 'https://www.lyon.archi.fr/',
                },
                {
                    school: 'INSA Lyon',
                    degree: 'Diplôme d\'Ingénieur - Génie Civil',
                    period: '2015 - 2020',
                    description: 'Cursus en génie civil et urbanisme.',
                    link: 'https://www.insa-lyon.fr/',
                },
            ],
        },
        creations: {
            title: 'Créations',
            digitalTitle: 'Art Numérique & 3D',
            architectureTitle: 'Architecture (PFE)',
            blenderContext: 'Expression de l\'imaginaire.',
            pfeContext: 'Mayotte, territoire délaissé, terre de tous les défis, de l\'impérieuse nécessité d\'agir.',
            viewBoard: 'Voir la Planche',
        },
        footer: {
            reachOut: 'Me contacter',
            crafted: 'Crafted with curiosity',
        },
    },
};
