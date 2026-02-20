import {defineConfig} from 'wxt';
import path from 'path';

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ['@wxt-dev/module-react'],
  // Relative to project root
  outDir: 'dist',
  srcDir: 'src',
  modulesDir: "wxt-modules",
  resolve: {
    alias: {
      // '@': process.cwd(),
      '@': path.resolve(process.cwd(), './src'), // or "./src" if using src directory
    },
  },
  "manifest": {
    "author": "nikolay.gerzhan@gmail.com",
    "version": "0.0.1",
    web_accessible_resources: [
      {
        resources: ["injected.js"],
        matches: ["*://127.0.0.1/*"],
      },
    ],
  },
  // NOTE:
  webExt: {
    startUrls: ["http://127.0.0.1:8081"],
  },
});
