/*
 * @Author: wxy
 * @Description: 
 * @Date: 2023-04-19 09:24:33
 * @LastEditTime: 2023-04-19 10:03:39
 */
import { defineConfig } from 'vite'
import ssr from "vite-plugin-ssr/plugin";
import react from '@vitejs/plugin-react-swc'
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ssr()],
  resolve: {
    alias: {
      "@assets": resolve(__dirname, "src/assets"),
      "@pages": resolve(__dirname, "pages"),
    },
  },
});
