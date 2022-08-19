import { exec } from 'child_process'
import util from 'util'
import { installForVSCode } from './linters/vscode/vscode.js'
import { installForWebstorm } from './linters/webstorm/webstorm.js'
import { commonInstall } from './linters/common/common.js'

export const startInstall = async (args) => {
  const { editor, packageManager } = args
  commonInstall(packageManager)
  const execAsync = util.promisify(exec)
  const installProcess = execAsync(`${packageManager} install`)
  const child = installProcess.child
  child.stdout.on('data', function (data) {
    console.log(data)
  })

  const { stdout, stderr } = await installProcess
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
