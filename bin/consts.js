import path from 'path'
import { fileURLToPath } from 'url'

export const PKG_ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
