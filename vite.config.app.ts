import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";
import * as fs from "fs";
import * as path from "path";

function seoPlugin() {
  return {
    name: "vite-plugin-seo",
    closeBundle() {
      const dataPath = path.resolve(__dirname, "app/config/data.ts");
      const sitemapPath = resolve(__dirname, "./dist-app/sitemap.xml");
      const indexPath = resolve(__dirname, "./dist-app/index.html");
      const distPath = resolve(__dirname, "./dist-app");
      
      try {
        const content = fs.readFileSync(dataPath, "utf-8");
        const matches = [...content.matchAll(/id:\s*"([^"]+)",[\s\S]*?label:\s*"([^"]+)"/g)];
        const components = matches.map(m => ({ id: m[1], label: m[2] }));
        
        // 1. Generate Sitemap
        const ids = components.map(c => c.id);
        const urls = ["", "overview", ...ids].map(id => `  <url>\n    <loc>https://gladvn.dev/${id}</loc>\n  </url>`).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        fs.writeFileSync(sitemapPath, xml);
        console.log(`✅ Sitemap generated at ${sitemapPath} with ${ids.length + 2} URLs.`);
        
        // 2. Static Meta Injection
        if (fs.existsSync(indexPath)) {
          const baseHtml = fs.readFileSync(indexPath, "utf-8");
          
          components.forEach(({ id, label }) => {
            const pageTitle = `${label} — gladvn Components`;
            const pageDesc = `Documentation and examples for the ${label} component in gladvn.`;
            
            const injectedHtml = baseHtml
              .replace(/<title>.*?<\/title>/, `<title>${pageTitle}</title>`)
              .replace(/content="gladvn — Tailwind CSS React Components"/g, `content="${pageTitle}"`)
              .replace(/content="A premium, zero-dependency Tailwind CSS UI component library for React.*?"/g, `content="${pageDesc}"`);
              
            const dir = resolve(distPath, id);
            if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
            fs.writeFileSync(resolve(dir, "index.html"), injectedHtml);
          });
          
          console.log(`✅ Statically injected meta tags for ${components.length} routes.`);
        }
      } catch (err) {
        console.error("Failed to execute SEO plugin:", err);
      }
    }
  };
}

export default defineConfig({
  resolve: {
    alias: {
      "~app": resolve(__dirname, "./app"),
      "@": resolve(__dirname, "./src"),
    },
  },
  plugins: [react(), tailwindcss(), seoPlugin()],
  build: {
    outDir: "dist-app",
    emptyOutDir: true,
  },
});
