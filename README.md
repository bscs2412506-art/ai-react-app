# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.

## AI-Assisted Development

AI was used as a development assistant throughout this project. I used AI to plan the application structure, understand React and TypeScript concepts, generate initial implementation ideas, troubleshoot errors, and improve the user interface.

### Prompts Used During Development

Examples of prompts used during development include:

1. "Build me a React settings form."
2. "Create a beginner-friendly React component structure for a settings dashboard."
3. "Add form validation using React Hook Form and Zod."
4. "Explain why my React form is not appearing in the browser."
5. "Help me troubleshoot my Vite React application."
6. "Make the dashboard responsive for desktop and mobile."
7. "Explain what I need to include in the AI-assisted development documentation."
8. "Help me organize the Git workflow and commits for this project."

### How AI Assisted the Development

AI helped break the project requirements into smaller tasks and provided explanations and implementation suggestions. I reviewed the generated code before using it and tested the application after making changes.

AI was also used for debugging and troubleshooting when issues occurred during development. This helped me understand the cause of problems instead of simply copying solutions.

### Manual Improvements and Corrections

After reviewing AI-generated suggestions, I made manual improvements and corrections to the project.

Examples include:

* Adjusting the dashboard layout and styling to match the project requirements.
* Correcting component imports and file organization.
* Checking and correcting form behavior and validation.
* Testing the application manually in the browser.
* Fixing issues that appeared during development instead of accepting generated code without review.
* Reviewing the responsive layout on different screen sizes.
* Organizing Git commits and manually connecting the project to GitHub.
* Creating and maintaining `CLAUDE.md` and `WORKFLOW.md` to document project conventions and the AI-assisted workflow.

### Lessons Learned

This project showed me that AI is most useful when it is given clear, specific tasks and its output is reviewed carefully. AI can speed up development and debugging, but the developer still needs to understand the code, test the application, identify mistakes, and make final decisions.

