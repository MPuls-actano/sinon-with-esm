import { callDependency } from './dependency-module.js'

export function callModuleUnderTest() {
  console.log('module-under-test called')
  const result = callDependency()
  return result
}
