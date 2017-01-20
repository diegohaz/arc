import mongoose from 'mongoose'
import { mongo } from 'config'

Object.keys(mongo.options).forEach((key) => {
  mongoose.set(key, mongo.options[key])
})

mongoose.Promise = Promise

/* istanbul ignore next */
mongoose.Types.ObjectId.prototype.view = () => ({ id: this.toString() })

/* istanbul ignore next */
mongoose.connection.on('error', (err) => {
  // eslint-disable-next-line no-console
  console.error(`MongoDB connection error: ${err}`)
  process.exit(-1)
})

export default mongoose
