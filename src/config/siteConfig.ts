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
        headline: "Exploring the intersection of public systems, technology, and decision-making.",
        subheadline: "I work on problems where AI fits into institutional systems—where it helps, where it introduces risk, and how to move forward without eroding trust.",
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
            "I’ve spent the last few years working on public sector modernization and AI-enabled systems. My interest lies in the gap between policy intent and technical implementation.",
            "In regulated environments, moving fast isn't always the goal. Building resilience is. I focus on problem framing and solution design that respects constraints while still finding ways to improve how essential services are delivered.",
            "Beyond the screen, I value time spent in the mountains and the clarity that comes from disconnecting.",
        ],
    },
    writing: {
        title: "Notes",
        description: "Thinking out loud about systems, trade-offs, and the messy process of building things. No schedule, just exploration.",
        substackUrl: "#", // Placeholder
        posts: [
            { title: "The gap between AI hype and institutional reality", href: "#" },
            { title: "Why technical demos are acts of storytelling", href: "#" },
            { title: "Learning in public: on being wrong", href: "#" },
        ],
    },
    contact: {
        email: "gchapman41@gmail.com",
        linkedin: "https://www.linkedin.com/in/gregory-chapman-a69a8919a/",
    },
};
