const os = require('os')
const path = require('path')
const { expect } = require('chai')
const CLI = require('../src/gunner')

let gunner
let pkgInfo

before(() => {
  gunner = new CLI()
  pkgInfo = require('../package.json')
})

describe('toolbox', (done) => {
  it('env.appName', (done) => {
    let result = gunner.toolbox.env.hasOwnProperty('appName')
    expect(result).to.be.true

    expect(gunner.toolbox.env.appName).equals('gunner')
    done()
  })

  it('env.arguments', (done) => {
    let result = gunner.toolbox.env.hasOwnProperty('arguments')
    expect(result).to.be.true

    done()
  })

  it('colors', (done) => {
    let result = gunner.toolbox.hasOwnProperty('colors')
    expect(result).to.be.true

    done()
  })

  it('command', (done) => {
    let result = gunner.toolbox.env.hasOwnProperty('command')
    expect(result).to.be.true

    done()
  })

  it('commandName', (done) => {
    let result = gunner.toolbox.env.hasOwnProperty('commandName')
    expect(result).to.be.true

    done()
  })

  it('config', (done) => {
    let result = gunner.toolbox.hasOwnProperty('config')
    expect(result).to.be.true

    done()
  })

  it('has debug flag', (done) => {
    let result = gunner.toolbox.env.hasOwnProperty('debug')
    expect(result).to.be.true

    done()
  })

  it('debug tool', (done) => {
    let result = gunner.toolbox.hasOwnProperty('debug')
    expect(result).to.be.true

    done()
  })

  it('has fs toolbox', (done) => {
    let result = gunner.toolbox.hasOwnProperty('fs')
    expect(result).to.be.true
    done()
  })

  it('filesystem', (done) => {
    let result = gunner.toolbox.hasOwnProperty('filesystem')
    expect(result).to.be.true
    done()
  })

  it('overwrite flag', (done) => {
    let result = gunner.toolbox.env.hasOwnProperty('overwrite')
    expect(result).to.be.true
    done()
  })

  it('packageName', (done) => {
    let result = gunner.toolbox.env.hasOwnProperty('packageName')
    expect(result).to.be.true

    expect(gunner.packageName).equals('gunner')
    done()
  })

  it('path tool', (done) => {
    let result = gunner.toolbox.hasOwnProperty('path')
    expect(result).to.be.true
    done()
  })

  it('print', (done) => {
    let result = gunner.toolbox.hasOwnProperty('print')
    expect(result).to.be.true
    done()
  })

  it('projectRoot', (done) => {
    let result = gunner.toolbox.env.hasOwnProperty('projectRoot')
    expect(result).to.be.true
    done()
  })

  it('strings', (done) => {
    let result = gunner.toolbox.hasOwnProperty('strings')
    expect(result).to.be.true
    done()
  })

  it('system', (done) => {
    let result = gunner.toolbox.hasOwnProperty('system')
    expect(result).to.be.true
    done()
  })

  it('template', (done) => {
    let result = gunner.toolbox.hasOwnProperty('template')
    expect(result).to.be.true
    done()
  })

  it('utils', (done) => {
    let result = gunner.toolbox.hasOwnProperty('utils')
    expect(result).to.be.true
    done()
  })

  it('verbose', (done) => {
    let result = gunner.toolbox.env.hasOwnProperty('verbose')
    expect(result).to.be.true
    done()
  })

  it('version', (done) => {
    let result = gunner.toolbox.env.hasOwnProperty('version')
    expect(result).to.be.true

    expect(gunner.version).equals(pkgInfo.version)
    done()
  })
})