import Sinon from 'sinon'
import * as depModule from '../../src/dependency-module.js'

export function stubDependency() {
  return Sinon.stub(depModule, 'callDependency').returns(false)
}
