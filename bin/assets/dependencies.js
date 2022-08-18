export const getDependencies = (prevDeps) => {
  return {
    ...prevDeps,
    '@typescript-eslint/eslint-plugin': '4.29.0',
    '@typescript-eslint/parser': '4.29.0',
    eslint: '7.32.0',
    'eslint-config-it-incubator': '^1.0.1',
    'eslint-config-prettier': '8.3.0',
    'eslint-plugin-prettier': '3.4.0',
    'eslint-plugin-react': '7.30.1',
    'patch-package': '^6.4.7',
    prettier: '2.7.1',
    'prettier-config-it-incubator': '^1.0.0',
    'prettier-stylelint': '^0.4.2',
    stylelint: '^14.10.0',
    'stylelint-config-clean-order': '^0.9.0',
    'stylelint-prettier': '^2.0.0',
    typescript: '^4.4.2',
  }
}
