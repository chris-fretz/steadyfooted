// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    fonts: [
        {
            provider: fontProviders.fontsource(),
            name: "IBM Plex Mono",
            cssVariable: "--font-ibm-plex-mono",
            weights: ["300 400 500 600 700"],
            fallbacks: ["monospace"]
        },
        {
            provider: fontProviders.fontsource(),
            name: "Pacifico",
            cssVariable: "--font-pacifico",
            fallbacks: ["cursive"]
        }
    ]
});
