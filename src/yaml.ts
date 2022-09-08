import {promises as fs} from 'fs'
import * as yaml from 'js-yaml'

export async function read(filePath: string): Promise<any> {
  const content = await fs.readFile(filePath, 'utf8')

  const yamlData = yaml.load(content)

  if (yamlData == null || yamlData == undefined) {
    throw 'Read yaml file failed'
  }

  return yamlData
}
