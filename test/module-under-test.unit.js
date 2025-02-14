import { expect } from 'chai'
import { callModuleUnderTest } from '../src/module-under-test.js'
import { stubDependency } from './helper/stub-dependency.js'
import Sinon from 'sinon'

describe('callModuleUnderTest()', () => {
  afterEach(() => {
    Sinon.restore()
  })
  it('should return true when dependency is NOT stubbed', () => {
    const result = callModuleUnderTest()
    expect(result).to.be.true
  })
  it('should return false when dependency is stubbed', () => {
    const depStub = stubDependency()
    const result = callModuleUnderTest()
    expect(result).to.be.false
    depStub.restore()
  })
})
