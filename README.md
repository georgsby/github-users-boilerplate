<!-- markdownlint-disable MD033 MD041 MD036 -->

<div align="center">

# Github Users Boilerplate

An app where you can search github users.

[![Vite][vite_img]][vite_url] 
[![React][react_img]][react_url] 
[![React Query][react_query_img]][react_query_url]
[![React Zustand][zustand_img]][zustand_url]
[![TypeScript][typescript_img]][typescript_url] 
[![Tailwind][tailwind_img]][tailwind_url]
[![yarn][yarn_img]][yarn_url]
[![ESLint][eslit_img]][eslint_url]

---

</div>

⚠️ The **Github Users Boilerplate** has server part due to cors issue during github OAuth integration.

### 🍺 Github OAuth apps

To follow best practices and make the development process as comfortable as possible, we have to create own Github OAuth
app to work with it in the project.

- Login your Github account
- Go `Setting` -> `Developer settings` -> `OAuth apps` and create your OAuth app
- Homepage URL and Authorization callback URL should be next - `http://localhost:5173/` and
  `http://localhost:5173/callback`
- Generate `client id` and `client secret`, keep them for env file

### ⚡️ Quick start

First, [download][node_download_url] and install **Node**. Version `18.18.0` (or higher) is required.

Now, you need to install the **yarn** package manager. Version `1.22.19` (or higher) is mandatory. Run the following
command in your terminal:

```console
npm install -g yarn
```

Then, clone install the dependencies for frontend and backend:

```console
 yarn install
```

```console
cd server && yarn install
```

Finally, run the app for both parts:

```console
yarn run dev
```

That's it! 🔥 A wonderful web application has been created in the current folder and you are ready to dig in.

### 💡 IDE recommendation

To make the development process as comfortable as possible, we recommend using the **Visual Studio Code** editor with
the following extensions:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- [DotEnv](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv)
- [SpellChecker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)

### 📂 Project Folder structure

```bash
.
├── public               # Public assets that can be served by the server
├── server               # Server side
│   ├── src              # Source files for server side
│   ├── package.json     # Lists the packages that the project depends on
│   └── tsconfig.json    # Configuration for the TypeScript compiler
├── src                  # Source files for the project
│   ├── api              # For logic that communicates with the server(s).
│   ├── assets           # Static assets like images, fonts, etc.
│   ├── components       # Reusable components
│   ├── constants        # Constants used across the project
│   ├── lib              # Utility functions and helpers
│   ├── pages            # The various pages of the web application
│   ├── services         # Encapsulates query logic
│   ├── store            # Global state management logic (Zustand)
│   ├── App.tsx          # Main application component
│   ├── global.css       # Global stylesheet
│   ├── main.tsx         # Entry point for the application
│   └── vite-env.d.ts    # TypeScript declarations for Vite
├── .env.example         # Example of env variables
├── .eslintignore        # Specifies intentionally untracked files to ignore by eslint
├── .eslintrc.cjs        # Configuration for ESLint
├── .gitignore           # Specifies intentionally untracked files to ignore
├── .prettierrc          # Configuration for Prettier
├── .components.json     # Configuration for shadcn-ui
├── index.html           # Entry point for the HTML document
├── package.json         # Lists the packages that the project depends on
├── postcss.config.js    # Configuration for PostCSS
├── README.md            # Documentation about the project
├── tailwind.config.js   # Configuration for Tailwind CSS
├── tsconfig.json        # Configuration for the TypeScript compiler
├── tsconfig.node.json   # TypeScript configuration for Node.js specifics
└── vite.config.ts       # Vite app configuration
```

<!-- Tech links -->

[vite_url]: https://vitejs.dev/
[vite_img]: https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white
[react_url]: https://react.dev/
[react_img]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react_query_url]: https://tanstack.com/query/latest/
[react_query_img]: https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=ReactQuery&logoColor=white
[tailwind_url]: https://sass-lang.com/](https://tailwindcss.com/ 
[tailwind_img]: https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white
[typescript_url]: https://www.typescriptlang.org/ 
[typescript_img]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white 
[eslint_url]: https://eslint.org/
[eslit_img]:https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white 
[yarn_url]: https://yarnpkg.com/ 
[yarn_img]: https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white 
[zustand_url]: https://zustand-demo.pmnd.rs/ 
[zustand_img]: https://img.shields.io/badge/react%20zustand-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB

<!-- Other -->

[node_download_url]: https://nodejs.org/en/download
