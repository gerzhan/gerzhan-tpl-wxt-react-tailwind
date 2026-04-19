# Gerzhan Template for create Web Extension

[github.com/gerzhan/gerzhan-tpl-wxt-react-tailwind](https://github.com/gerzhan/gerzhan-tpl-wxt-react-tailwind)

## ❇️ Tech Stack

- ✅ **Wxt**: [Wxt](https://wxt.dev)
- ✅ **React**: [React](https://react.dev/)
- ✅ **Tailwind CSS v4**: [Tailwind CSS](https://tailwindcss.com)
  - [@tailwindcss/vite](https://www.npmjs.com/package/@tailwindcss/vite?activeTab=readme)
- ✅ **json-server**

## Project Structure

```
📂 {rootDir}/
   📁 .wxt/
   📁 dist/
   📁 modules/
   📁 public/
   📂 src/
      📁 assets/
      📁 components/
      📁 composables/
      📁 entrypoints/
          📁 background/
          📁 localhost.content/
          📁 popup/
          📄 injected.ts
   📄 .env
   📄 .env.local
   📄 package.json
   📄 tsconfig.json
   📄 web-ext.config.ts
   📄 wxt.config.ts
```

## Icons

- [Manifest - Icons](https://developer.chrome.com/docs/extensions/reference/manifest/icons)
-  **Icons Generator** - [alexleybourne.github.io/chrome-extension-icon-generator/](https://alexleybourne.github.io/chrome-extension-icon-generator/)

## Development

### Start mock server api

```bash
# запуск mock api и development html page
$make mock_server
```