import timestamps from 'mongoose-timestamp'

import getMongoose from 'server/lib/getMongoose'

const { mongoose, db } = getMongoose()
const { Schema } = mongoose
const { ObjectId } = Schema.Types

const voteSchema = new Schema({
  _day: {
    ref: 'Day',
    required: true,
    type: ObjectId,
  },
  sessionId: {
    required: true,
    type: String,
  },
  shouldBuy: {
    default: false,
    required: true,
    type: Boolean,
  },
})

voteSchema.plugin(timestamps)

const Vote = db.model('Vote', voteSchema)

export default Vote
