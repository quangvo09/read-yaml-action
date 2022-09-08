import * as core from '@actions/core'
import {read} from './yaml'

async function run(): Promise<void> {
  try {
    const filePath: string = core.getInput('file_path')
    core.debug(`Read file ${filePath} ...`)
    const yamlData = read(filePath)
    core.setOutput('data', yamlData)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
