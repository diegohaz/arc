import { EventEmitter } from 'events'
import mockgoose from 'mockgoose'
import mongoose from '../src/services/mongoose'
import { mongo } from '../src/config'

EventEmitter.defaultMaxListeners = Infinity
jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000

beforeAll(async () => {
  await mockgoose(mongoose)
  mongoose.connect(mongo.uri)
})

afterAll(() => {
  mongoose.disconnect()
})

afterEach(async () => {
  const { collections } = mongoose.connection
  const promises = []
  Object.keys(collections).forEach((collection) => {
    promises.push(collections[collection].remove())
  })
  await Promise.all(promises)
})
