import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import dts from "vite-plugin-dts";
import { resolve } from "path";
import pkg from "./package.json" with { type: "json" };

// Externalize all dependencies + peerDep endencies
const external = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
  "react/jsx-runtime",
  "next-themes",
];

export default defineConfig(({ command }) => ({
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  plugins: [
    react(),
    // Tailwind only needed for dev mode (playground)
    tailwindcss(),
    // DTS only needed for build
    ...(command === "build"
      ? [
          dts({
            tsconfigPath: "./tsconfig.build.json",
          }),
        ]
      : []),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "gladvn",
      fileName: (format) => `index.${format === "es" ? "js" : "cjs"}`,
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      // Externalize ALL deps - they'll be installed as transitive deps via npm
      external: (id) =>
        external.some((dep) => id === dep || id.startsWith(dep + "/")),
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime",
        },
      },
    },
    // Generate sourcemaps for debugging
    sourcemap: true,
    // Don't minify - let consumer's bundler handle it
    minify: false,
  },
}));
