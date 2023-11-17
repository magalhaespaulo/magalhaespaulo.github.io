# 📝 Prerequisites

- [Git](https://git-scm.com/) v2.x
- [Node](https://nodejs.org/) v18.x
- [Yarn](https://yarnpkg.com/) v1.22.x

<br />

# 🧪 Features

- 🔥 [Next.js](https://nextjs.org)
- 🎨 [Tailwind CSS](https://tailwindcss.com)
- 🎉 Type checking [TypeScript](https://typescriptlang.org)
- ✏️ Linter with [ESLint](https://eslint.org)
- 🛠 Code Formatter with [Prettier](https://prettier.io) and [EditorConfig](https://editorconfig.org/)
- 🦊 [Husky](https://typicode.github.io/husky) for Git Hooks
- ☕ [Lint-staged](https://github.com/okonet/lint-staged) to run linter only on staged files

<br />

# 💻 Getting started

First, run the development server:

```bash
# Install dependencies
yarn install

# Run in development mode
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

<br />

# 🔥 Production

You can see the results locally in production mode with:

```bash
yarn prod
```

The generated HTML and CSS files are minified (built-in feature from [Next.js](https://nextjs.org)). It will also removed unused CSS from [Tailwind CSS](https://tailwindcss.com).

<br />

# 🚀 Deploy with [static export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)

You can create an optimized production build with:

```bash
yarn export
```

Now, is ready to be deployed. All generated files are located at `out` folder, which you can deploy with any hosting service.

<br />

# 📝 License

Licensed under the [MIT License](LICENSE), Copyright © 2021
