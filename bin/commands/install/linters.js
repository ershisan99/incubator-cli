import { exec } from 'child_process'
import util from 'util'
import { installForVSCode } from './linters/vscode/vscode.js'
import { installForWebstorm } from './linters/webstorm/webstorm.js'
import { commonInstall } from './linters/common/common.js'

export const startInstall = async (args) => {
  const { editor, packageManager, autoFix } = args
  commonInstall(packageManager)
  const execAsync = util.promisify(exec)
  const installProcess = execAsync(`${packageManager} install`)
  const child = installProcess.child
  child.stdout.on('data', function (data) {
    console.log(data)
  })
  const autofix = async (autofixBool) => {
    if (autofixBool === 'yes') {
      const packageManagerNpx = packageManager === 'yarn' ? 'yarn' : 'npx'
      const eslintFixProcess = execAsync(`${packageManagerNpx} eslint --fix . --ext .js,.jsx,.ts,.tsx src`)
      const prettierFixProcess = execAsync(`${packageManagerNpx} prettier --write .`)
      const stylelintFixProcess = execAsync(
        `${packageManagerNpx} stylelint "**/*.{css,scss}" --fix`
      )
      const childEslint = eslintFixProcess.child
      const childPrettier = prettierFixProcess.child
      const childStylelint = stylelintFixProcess.child
      childEslint.stdout.on('data', function (data) {
        console.log(data)
      })
      childPrettier.stdout.on('data', function (data) {
        console.log(data)
      })

      childStylelint.stdout.on('data', function (data) {
        console.log(data)
      })
      const eslintRes = await eslintFixProcess
      const prettierRes = await prettierFixProcess
      const stylelintRes = await stylelintFixProcess
    }
  }
  const { stdout, stderr } = await installProcess
  if (editor === 'None') return
  if (editor === 'Webstorm') {
    installForWebstorm()
    autofix(autoFix)
    return
  }
  if (editor === 'VSCode') {
    installForVSCode()
    autofix(autoFix)

    return
  }
  if (editor === 'Both') {
    installForWebstorm()
    installForVSCode()
    autofix(autoFix)
    return
  }
}
