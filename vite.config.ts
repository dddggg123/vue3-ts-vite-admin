import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    extensions: [".js", ".vue", ".json", "scss", ".ts"],
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
      {
        find: "components",
        replacement: path.resolve(__dirname, "src/components"),
      },
      {
        find: "utils",
        replacement: path.resolve(__dirname, "src/utils"),
      },
      {
        find: "vites",
        replacement: path.resolve(__dirname, "src/view"),
      },
    ],
  },
  plugins: [vue()],
  server: {
    proxy: {
      "/ws": {
        target: "https://apis.map.qq.com",
      },
    },
    open: true,
    port: 6688,
  },
});
