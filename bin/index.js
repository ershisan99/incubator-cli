#!/usr/bin/env node
import { Command } from 'commander'
import inquirer from 'inquirer'
import { startInstall } from './commands/install/linters.js'
const program = new Command()
const install = program.command('install')

const questions = [
  {
    type: 'list',
    name: 'editor',
    message: 'Choose your editor:',
    choices: ['Webstorm', 'VSCode', 'Both', 'None'],
  },
  {
    type: 'list',
    name: 'packageManager',
    message: 'Choose your package manager:',
    choices: ['yarn', 'npm'],
  },
  {
    type: 'list',
    name: 'autoFix',
    message: 'Do you want to auto-fix your code after installation?',
    choices: ['yes', 'no'],
  },
]

install.command('linters').action(async () => {
  return await inquirer
    .prompt(questions)
    .then(startInstall)
    .catch((err) => console.log(err))
})
program.parse(process.argv)
