# Gregory Chapman Personal Website

A modern, responsive, single-page personal website built with Next.js, TailwindCSS, and TypeScript.

## Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser.

## updating Content

You can manage almost all content from a single configuration file:
`src/config/siteConfig.ts`

-   **Hero**: Update `headline`, `subheadline`, and `headshot` path.
-   **Stats**: Edit the `credibility.stats` array.
-   **Capabilities**: Add/remove items in the `capabilities` array. Icon names map to Lucide React icons.
-   **Work**: Connect your portfolio items in the `work.items` array.
-   **Socials**: Update your LinkedIn and Email in the `contact` section.

## Images

Place your headshot image in the `public` folder and name it `headshot.jpg` (or update the path in `siteConfig.ts`).

## styling

Global styles are in `src/app/globals.css`.
Brand colors are defined in `tailwind.config.ts` under `colors.navy`, `colors.cobalt`, etc.
