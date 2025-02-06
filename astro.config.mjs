// @ts-check
import { defineConfig } from 'astro/config';

// Debugging: Print API Key to Cloudflare Build Logs
console.log("DatoCMS API Key:", process.env.DATOCMS_API_KEY);

export default defineConfig({
  vite: {
    define: {
      "import.meta.env.DATOCMS_API_KEY": JSON.stringify(process.env.DATOCMS_API_KEY),
    },
  },
});

