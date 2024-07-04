import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/variables/index.scss";`,
      },
    },
  },
  server: {
    proxy: {
      "^/send_mail-1.php": {
        target: "https://pavel-ib.ru",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
