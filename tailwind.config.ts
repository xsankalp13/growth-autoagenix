import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--bg-color)",
                foreground: "var(--text-primary)",
                "accent-gold": "var(--accent-gold)",
                "accent-gold-glow": "var(--accent-gold-glow)",
            },
            fontFamily: {
                heading: ['var(--font-heading)'],
                body: ['var(--font-body)'],
            },
            keyframes: {
                'glow-pulse': {
                    '0%': { opacity: '0.5', transform: 'translate(-50%, -50%) scale(0.9)' },
                    '100%': { opacity: '1', transform: 'translate(-50%, -50%) scale(1.1)' },
                },
            },
            animation: {
                'glow-pulse': 'glow-pulse 4s infinite alternate',
            },
        },
    },
    plugins: [],
};
export default config;
