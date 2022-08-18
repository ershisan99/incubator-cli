import { exec } from 'child_process'
import fs from 'fs-extra'
import path from 'path'
import { PKG_ROOT } from '../../../../consts.js'
export const installForVSCode = () => {
  const assetsPath = path.join(PKG_ROOT, 'bin/assets')
  const currentPath = process.cwd()
  const assetsCopyPath = currentPath
  const vsCodeAssetsPath = path.join(assetsPath, 'vscode')
  const vscodeAssetsDirPath = path.join(assetsCopyPath, '.vscode')
  const eslintInstallProcess = exec('code --install-extension dbaeumer.vscode-eslint')
  const styleLintInstallProcess = exec('code --install-extension stylelint.vscode-stylelint')

  eslintInstallProcess.stdout.pipe(process.stdout)
  styleLintInstallProcess.stdout.pipe(process.stdout)

  fs.copy(vsCodeAssetsPath, vscodeAssetsDirPath, (err) => {
    if (err) throw new Error(err)
    console.log('VS Code project settings applied.')
  })
}
