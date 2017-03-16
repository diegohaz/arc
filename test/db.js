import { Mockgoose } from 'mockgoose'
import mongoose from '../src/services/mongoose'

jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000

const mockgoose = new Mockgoose(mongoose)

beforeAll(async (done) => {
  await mockgoose.prepareStorage()
  mongoose.connect('', done)
})

afterAll(() => {
  mongoose.disconnect()
})

afterEach(async () => {
  await mockgoose.helper.reset()
})
