import fs from 'fs-extra'
import path from 'path'
import { PKG_ROOT } from '../../../../consts.js'
export const installForWebstorm = () => {
  const assetsPath = path.join(PKG_ROOT, 'bin/assets')
  const currentPath = process.cwd()
  const assetsCopyPath = currentPath
  const webstormAssetsPath = path.join(assetsPath, 'webstorm')
  const webstormAssetsDirPath = path.join(assetsCopyPath, '.idea')
  fs.copy(webstormAssetsPath, webstormAssetsDirPath, (err) => {
    if (err) throw new Error(err)
    console.log('Webstorm project settings applied.')
  })
}
