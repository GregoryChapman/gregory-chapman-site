export const siteConfig = {
    header: {
        title: "Gregory Chapman",
        navLinks: [
            { name: "About", href: "#about" },
            { name: "Notes", href: "#writing" },
            { name: "Elsewhere", href: "#contact" },
        ],
        cta: {
            label: "Find me",
            href: "#contact",
        },
    },
    hero: {
        headline: "I work on system design and solution engineering for the public sector.",
        subheadline: "My focus is on understanding how technology like AI interacts with institutional constraints. I help organizations make technical decisions that align with their policy goals.",
        ctas: [
            { label: "About me", href: "#about", primary: true },
            { label: "Read my notes", href: "#writing", primary: false },
        ],
        headshot: "/headshot.jpg",
    },
    // Credibility and Capabilities sections are deprecated for this iteration
    credibility: {
        stats: [],
    },
    capabilities: [],
    // Work section is deprecated for this iteration
    work: {
        title: "",
        items: [],
    },
    about: {
        title: "About",
        description: [
            "I work in solution engineering, specifically within the public sector. My focus is on designing technical systems that can operate effectively within complex regulatory environments.",
            "I am interested in AI and automation—not as abstract concepts, but as tools that must function reliably alongside human decision-making. I spend my time evaluating where these technologies add value and where they require careful oversight.",
            "When I am not working, I am usually skiing, playing chess, or reading about the engineering behind theme parks.",
        ],
    },
    writing: {
        title: "Notes",
        description: "I write to clarify my thinking on systems, constraints, and the practical challenges of building software.",
        substackUrl: "#", // Placeholder
        posts: [
            { title: "AI in regulated environments", href: "#" },
            { title: "The role of narrative in technical demos", href: "#" },
            { title: "Building for resilience, not just speed", href: "#" },
        ],
    },
    contact: {
        email: "gchapman41@gmail.com",
        linkedin: "https://www.linkedin.com/in/gregory-chapman-a69a8919a/",
    },
};
