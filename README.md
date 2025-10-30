# AppDost - Modern Web Application

A modern web application built with React, TypeScript, and Vite, featuring responsive design and a clean, maintainable architecture.
**Live Demo:** [https://appdostbhanu.netlify.app](https://appdostbhanu.netlify.app)

## 🚀 Features

- ⚡ Built with Vite for fast development and builds
- 🎨 Styled with Tailwind CSS for rapid UI development
- 🔄 React Router for seamless navigation
- 🎭 Dark/Light theme support
- 📱 Fully responsive design
- 🛠 TypeScript for type safety
- 🧪 Comprehensive test setup

## 🛠 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/bhanuaswanthsai/appdost.git
   cd appdost
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   # or
   pnpm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

## 🏗 Project Structure

```
src/
├── assets/           # Static assets
├── components/       # Reusable components
│   ├── common/       # Common components
│   ├── home/         # Home page components
│   └── layout/       # Layout components
├── context/          # React context providers
├── pages/            # Page components
└── styles/           # Global styles
```

## 🚀 Building for Production

```bash
# Build for production
npm run build

# Preview the production build
npm run preview
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
