import next from "eslint-config-next";

/** @type {import('eslint').Linter.Config[]} */
const config = [{ ignores: [".next/**", "node_modules/**", "out/**"] }, ...next];

export default config;
