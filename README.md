# INCUBATOR-CLI

## Installation

```bash
npm install -g incubator-cli
```

```bash
yarn global add incubator-cli  
```


## Usage

### Linters

```bash
incubator install linters
```

##### Params: 

* Editor: 
1. **Webstorm**: Adds webstorm config files
2. **VsCode**: Adds vscode config files
3. **Both**: Adds both webstorm and vscode config files
4. **None**: Does not add config files

* Package Manager: 
1. **npm**: installs node_modules using npm
2. **yarn**: installs node_modules using yarn

* Auto fix:
1. **yes**: run eslint --fix, prettier --write, stylelint --fix for project files after installation
2. **no**: do nothing after installation 