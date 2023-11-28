// vite.config.ts
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), tsconfigPaths()],
  build: {
    lib: {
      entry: {
        app: "src/main.ts",
        contentScript: "src/content-script/index.ts",
        inpageScript: "src/inpage-script/index.ts",
      },
      name: "SphinxApp",
      fileName: (format, entryName) => {
        if (entryName === "contentScript") {
          return "content-script.js";
        } else if (entryName === "inpageScript") {
          return "inpage-script.js";
        } else {
          return "sphinx.js";
        }
      },
    },
    outDir: "dist",
  },
});
