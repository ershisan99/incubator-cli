import fs from 'fs-extra'
import path from 'path'
import { getDependencies } from '../../../../assets/dependencies.js'
import { PKG_ROOT } from '../../../../consts.js'

export const commonInstall = async (packageManager) => {
  const assetsPath = path.join(PKG_ROOT, 'bin/assets')
  const commonAssetsPath = path.join(assetsPath, 'common')
  const currentPath = process.cwd()
  const assetsCopyPath = currentPath
  const packageJsonPath = `${currentPath}/package.json`
  const file_content = fs.readFileSync(packageJsonPath)
  let content = JSON.parse(file_content)
  const packageJsonExists = fs.existsSync(packageJsonPath)
  let devDependencies = content.devDependencies
  let newDeps = await getDependencies(devDependencies)
  console.log(newDeps)
  content = {
    ...content,
    devDependencies: newDeps,
  }
  if (!packageJsonExists) {
    console.error('package.json not found')
    return
  }

  fs.copy(commonAssetsPath, assetsCopyPath, (err) => {
    if (err) throw new Error(err)
    console.log('Config files copied.')
  })
  fs.writeFileSync(packageJsonPath, JSON.stringify(content), (err) => {
    if (err) throw new Error(err)
    console.log('package.json updated')
  })
}
