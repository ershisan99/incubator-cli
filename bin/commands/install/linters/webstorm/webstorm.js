import fs from 'fs-extra'
import path from 'path'
import { PKG_ROOT } from '../../../../consts.js'

export const installForWebstorm = () => {
  const assetsPath = path.join(PKG_ROOT, 'bin/assets')
  const currentPath = process.cwd()
  const assetsCopyPath = currentPath
  const webstormAssetsPath = path.join(assetsPath, 'webstorm')
  const webstormAssetsDirPath = path.join(assetsCopyPath, '.idea')
  if (fs.existsSync) fs.rmSync(webstormAssetsDirPath, { recursive: true, force: true })

  fs.mkdirSync(webstormAssetsDirPath)

  fs.copy(webstormAssetsPath, webstormAssetsDirPath, (err) => {
    if (err) throw new Error(err)
    console.log('Webstorm project settings applied.')
  })

  const newXml = `<?xml version="1.0" encoding="UTF-8"?>
      <project>
      <component name="PropertiesComponent"><![CDATA[{
      "keyToString": {
        "RunOnceActivity.OpenProjectViewOnStart": "true",
        "RunOnceActivity.ShowReadmeOnStart": "true",
        "WebServerToolWindowFactoryState": "false",
        "node.js.detected.package.eslint": "true",
        "node.js.detected.package.standard": "true",
        "node.js.selected.package.eslint": "(autodetect)",
        "node.js.selected.package.standard": "",
        "node.js.selected.package.tslint": "(autodetect)",
        "nodejs_interpreter_path": "node",
        "nodejs_package_manager_path": "npm",
        "prettierjs.PrettierConfiguration.Package": "PRETTIER_PATH",
        "settings.editor.selected.configurable": "settings.javascript.prettier",
        "ts.external.directory.path": "TS_EXTERNAL_PATH",

        "vue.rearranger.settings.migration": "true"
      }
    }]]></component>
      </project>`
    .replace('PRETTIER_PATH', path.join(process.cwd(), '/node_modules/prettier'))
    .replace('TS_EXTERNAL_PATH', path.join(process.cwd(), '/node_modules/typescript/lib'))

  fs.writeFile(path.join(webstormAssetsDirPath, 'workspace.xml'), newXml)
}
