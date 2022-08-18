#!/usr/bin/env node
import { exec } from 'child_process'
import fs from 'fs-extra'
import path from 'path'
import { PKG_ROOT } from '../../consts.js'
import { getDependencies } from '../../assets/dependencies.js'
import { installForVSCode } from './linters/vscode/vscode.js'
import { installForWebstorm } from './linters/webstorm/webstorm.js'
import { commonInstall } from './linters/common/common.js'

export const startInstall = (args) => {
  const { editor, packageManager } = args
  commonInstall(packageManager)

  if (editor === 'None') return
  if (editor === 'Webstorm') {
    installForWebstorm()
    return
  }
  if (editor === 'VSCode') {
    installForVSCode()
    return
  }
  if (editor === 'Both') {
    installForWebstorm()
    installForVSCode()
    return
  }
}
