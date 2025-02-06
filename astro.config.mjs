// @ts-check
import { defineConfig } from 'astro/config';
console.log("DatoCMS API Key:", process.env.DATOCMS_API_KEY);
export default defineConfig({
  vite: {
    define: {
      "import.meta.env.DATOCMS_API_KEY": JSON.stringify(process.env.DATOCMS_API_KEY),
    },
  },
});


// https://astro.build/config
export default defineConfig({});
