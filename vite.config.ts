import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  appType: "spa",           // forces history fallback in dev
  plugins: [react(), tsconfigPaths()],
});
