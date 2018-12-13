const cheerio = require('cheerio')
const { Nuxt, Builder } = require('nuxt')
const config = require('./fixtures/nuxt.config')
const request = require('request-promise-native')

const url = (path) => `http://localhost:3000${path}`
const get = (path) => request(url(path))

describe('basic', () => {
  let nuxt
  let page
  let browser

  beforeAll(async () => {
    if (process.env.NODE_ENV === 'development') return
    nuxt = new Nuxt(config)

    const createNuxt = async () => {
      await new Builder(nuxt).build()
      await nuxt.listen(3000)
    }
    await Promise.all([createNuxt()])
  }, 60000)

  afterAll(async () => {
    if (process.env.NODE_ENV === 'development') return
    await nuxt.close()
  })

  test('/ へのリクエストが問題なく疎通する', async () => {
    const html = await get('/')
    const $ = cheerio.load(html)
    expect($('#test').text()).toBe('test')
  })
})
