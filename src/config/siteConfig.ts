export const siteConfig = {
    header: {
        title: "Gregory Chapman",
        navLinks: [
            { name: "About", href: "#about" },
            { name: "Focus", href: "#capabilities" },
            { name: "Projects", href: "#work" },
            { name: "Notes", href: "#writing" },
        ],
        cta: {
            label: "Say hello",
            href: "#contact",
        },
    },
    hero: {
        headline: "I spend a lot of time thinking about how people work — and how tools can make that easier.",
        subheadline: "Usually that involves AI, data, and a bit of storytelling. I build prototypes, write about systems, and try to make complex tech feel approachable.",
        ctas: [
            { label: "Check out my projects", href: "#work", primary: true },
            { label: "Read my notes", href: "#writing", primary: false },
        ],
        headshot: "/headshot.jpg", // Placeholder path
    },
    credibility: {
        stats: [
            { value: "3+", label: "Years Building" },
            { value: "40+", label: "Prototypes" },
            { value: "1k+", label: "People Taught" },
            { value: "AI", label: "Experiments" },
        ],
    },
    about: {
        title: "Hi, I'm Greg.",
        description: [
            "I’ve always been curious about the gap between 'what technology can do' and 'what people actually do with it'.",
            "My day job leans into Solution Engineering and AI—exploring how platforms like Salesforce can change public sector work. But really, I just like taking messy problems and finding clean, useful solutions.",
            "When I’m not staring at a screen, I’m usually skiing in Whistler, losing a game of chess, or nerding out over theme park design.",
        ],
    },
    capabilities: [
        {
            title: "Making AI Useful",
            description: "Moving beyond the hype to figure out where agents and automation actually help real humans get work done.",
            icon: "Cpu",
        },
        {
            title: "Storytelling with Tech",
            description: "Building demos and narratives that explain 'why' something matters, not just 'how' it works.",
            icon: "Presentation",
        },
        {
            title: "Data Clarity",
            description: "Turning confusing spreadsheets and dashboards into clear signals that help people decide what to do next.",
            icon: "BarChart3",
        },
        {
            title: "Public Sector Modernization",
            description: "Thinking about how government services can be faster, friendlier, and more accessible for everyone.",
            icon: "Landmark",
        },
    ],
    work: {
        title: "Things I've Built / Explored",
        items: [
            {
                title: "Agentic Workflows",
                description: "Experimenting with autonomous agents to handle routine tasks—and finding out where they break.",
                tags: ["AI", "Experiments"],
            },
            {
                title: "Better Public Services",
                description: "Reimagining how citizens apply for permits and grants without getting a headache.",
                tags: ["Public Sector", "Design"],
            },
            {
                title: "Regulatory Tech",
                description: "Building workflows for inspections and licensing that actually make sense for the inspector.",
                tags: ["Workflow", "Efficiency"],
            },
            {
                title: "Grant Management",
                description: "Making the path from 'application' to 'funding' transparent and fast.",
                tags: ["Finance", "Process"],
            },
            {
                title: "Hiring Portals",
                description: " Designing interfaces that treat candidates like people, not rows in a database.",
                tags: ["UX", "Talent"],
            },
            {
                title: "Mapping Decisions",
                description: "Using GIS to put data on a map, because seeing 'where' changes how we understand 'what'.",
                tags: ["ESRI", "Maps"],
            },
        ],
    },
    writing: {
        title: "Notes & Doubts",
        description: "I use writing to figure out what I think. It’s mostly about AI, career growth, and the messy process of building things.",
        substackUrl: "https://substack.com", // Placeholder
        posts: [
            { title: "Why technical demos are actually just stories", href: "#" },
            { title: "The gap between AI hype and reality", href: "#" },
            { title: "Learning in public (and being wrong)", href: "#" },
        ],
    },
    contact: {
        email: "gchapman41@gmail.com",
        linkedin: "https://www.linkedin.com/in/gregory-chapman-a69a8919a/", // Replace with real URL
    },
};
