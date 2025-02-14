import { expect } from 'chai'
import { performRestRequest } from '../src/module-with-rest-req-under-test.js'
import Sinon from 'sinon'


describe('performRestRequest()', () => {
  afterEach(() => {
    Sinon.restore()
  })
  it('should return when not mocked', async () => {
    const { ip } = await performRestRequest()
    expect(ip).to.be.not.equal('999.999.999.999')
  })
  it('should return mocked value when mocked', async () => {
    const server = Sinon.fakeServer.create({autoRespond: true, respondImmediately: true})
    server.respondWith(
      new RegExp('ipify'),
      [
        200,
        { 'Content-Type': 'application/json' },
        JSON.stringify({ ip: '999.999.999.999' }),
      ],
    )
    const { ip } = await performRestRequest()
    expect(ip).to.be.equal('999.999.999.999')
  })
})
