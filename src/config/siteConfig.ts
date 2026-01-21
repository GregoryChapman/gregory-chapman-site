export const siteConfig = {
    header: {
        title: "Gregory Chapman",
        navLinks: [
            { name: "About", href: "/#about" },
            { name: "Notes", href: "/#writing" },
            { name: "Gallery", href: "/gallery" },
            { name: "Elsewhere", href: "/#contact" },
        ],
        cta: {
            label: "Find me",
            href: "/#contact",
        },
    },
    hero: {
        headline: "Public systems, technology, and decision-making.",
        subheadline: "I work on system design and solution engineering for the public sector. My focus is on understanding how technology like AI interacts with institutional constraints.",
        ctas: [
            { label: "About me", href: "/#about", primary: true },
            { label: "Read my notes", href: "/#writing", primary: false },
        ],
        headshot: "/headshot.jpg",
    },
    gallery: {
        title: "Gallery",
        description: "A small collection of places and moments I’ve found interesting over time.",
        images: [
            { src: "/gallery/stadium.jpg", alt: "Rogers Centre Canada Flag" },
            { src: "/gallery/snow.jpg", alt: "Heavy snowfall" },
            { src: "/gallery/ocean.jpg", alt: "Ocean waves" },
            { src: "/gallery/zipline.jpg", alt: "Ziplining in Mexico" },
            { src: "/gallery/sand_sculpture.jpg", alt: "Sand sculpture" },
            { src: "/gallery/lake_dock.jpg", alt: "Lakeside dock in autumn" },
            { src: "/gallery/valley_view.jpg", alt: "Valley view" },
            { src: "/gallery/light_arch.jpg", alt: "Light installation" },
            { src: "/gallery/concert.jpg", alt: "Concert stage lights" },
            { src: "/gallery/cows.jpg", alt: "Meeting cows" },
            { src: "/gallery/holiday_lights.jpg", alt: "Holiday garden lights" },
            { src: "/gallery/beach_sunset.jpg", alt: "Beach sunset with palms" },
            { src: "/gallery/autumn_lake.jpg", alt: "Autumn lake reflection" },
            { src: "/gallery/ski_mountain.jpg", alt: "Skiing at the summit" },
            { src: "/gallery/ocean_swim.jpg", alt: "Swimming in the ocean" },
        ],
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
        substackUrl: "https://substack.com/@gregorychapman",
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
