// vite.config.js
import react from "@vitejs/plugin-react";
import * as esbuild from "esbuild";
import fs from "node:fs";
import { defineConfig } from "vite";

const rollupPlugin = (matchers) => ({
  name: "js-in-jsx",
  load(id) {
    if (matchers.some(matcher => matcher.test(id))) {
      const file = fs.readFileSync(id, { encoding: "utf-8" });
      return esbuild.transformSync(file, { loader: "jsx" });
    }
  }
});

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      plugins: [
        rollupPlugin([/\/src\/.*\.js$/])
      ],
    },
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
    },
  },
  esbuild: {
    jsx: 'automatic',
    loader: "jsx",
    include: /\/src\/.*\.js$/,
    exclude: [],
  },
});