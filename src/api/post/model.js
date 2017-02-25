import mongoose, { Schema } from 'mongoose'

const postSchema = new Schema({
  title: {
    type: String,
  },
  body: {
    type: String,
  },
}, {
  timestamps: true,
})

postSchema.methods = {
  view(full) {
    const view = {
      // simple view
      id: this.id,
      title: this.title,
      body: this.body,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    }

    return full ? {
      ...view,
      // add properties for a full view
    } : view
  },
}

module.exports = mongoose.model('Post', postSchema)
export default exports
