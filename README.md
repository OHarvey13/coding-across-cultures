# 🌏 Coding Across Cultures – 3D Interactive Experience

Explore cultural landmarks in an immersive 3D environment, with multilingual support in English and Japanese.  
Click on locations to reveal cultural facts, and use the toggle to switch between languages.

Built with React, Three.js, and @react-three/fiber.

---

## 🚀 Features

- 🌐 Interactive 3D models of landmarks (GLTF)
- 🗺️ Click-to-explore cultural locations
- 🈯 Multilingual support: English 🇺🇸 & Japanese 🇯🇵
- 🧠 Translation powered by i18next + language toggle
- 🔁 Smooth camera movement and animation support via Drei/GSAP
- 💡 Clean, modular structure using modern React best practices

---

## 📁 Project Structure

```
public/
  ├─ models/               # 3D .glb files
  └─ locales/
      ├─ en/translation.json
      └─ ja/translation.json

src/
  ├─ components/           # UI elements (language toggle, overlays)
  ├─ scenes/               # 3D canvas and model loaders
  ├─ data/                 # Cultural facts
  ├─ i18n.js               # i18next configuration
  └─ App.jsx               # Main app component
```

---

## 🧪 Getting Started

### 📦 Install dependencies

```bash
npm install
```

### 🧭 Start the development server

```bash
npm start
```

---

## 🌐 Language Toggle

Use the toggle in the UI to switch between:
- English (`en`)
- Japanese (`ja`)

Translations are stored in:
```
/public/locales/en/translation.json
/public/locales/ja/translation.json
```

---

## 📦 Build for Production

```bash
npm run build
```

Builds a minified version in `/build`, ready to deploy.

---

## 🧠 Credits & Tools

- [React](https://reactjs.org/)
- [Three.js](https://threejs.org/)
- [@react-three/fiber](https://github.com/pmndrs/react-three-fiber)
- [i18next](https://www.i18next.com/)
- [GSAP](https://greensock.com/gsap/) *(optional animation support)*

---
