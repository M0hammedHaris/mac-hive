# Package Management Rule

- **Package Manager:** **ALWAYS** use `pnpm` for all package management tasks (install, add, remove, script running).
- **Prohibition:** Do not use `npm` or `yarn` commands unless explicitly requested by the user or strictly required for a unique environment reason that `pnpm` cannot handle (highly unlikely in this project).
- **Workflow:** When adding new dependencies, use `pnpm add [package]`. When running scripts, use `pnpm [script]`.
