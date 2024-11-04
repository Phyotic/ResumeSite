interface Home {
    name: string;
    location: string;
    "job-title": string;
    "profile-pic": string;
    description: string;
}

interface Project {
    name: string;
    description: string;
    image: string;
    "github-url": string;
    "site-url": string;
    "tech-used": string[];
}

interface Card {
    header: string;
    "sub-header": string;
    cover: string;
}

interface WorkingOn {
    "current-book": Card;
    "past-read": Card[];
    "current-project": Project;
}

interface SocialLink {
    name: string;
    url: string;
}

interface AboutMe {
    "working-on": WorkingOn;
    certifications: Card[];
    skills: string[];
    links: SocialLink[];
}

interface SiteData {
    home: Home;
    projects: Project[];
    "about-me": AboutMe;
    updated: string;
}

export type { SiteData as SiteData };
export type { Project as Project };
export type { Card as Card };
