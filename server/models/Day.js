import timestamps from 'mongoose-timestamp'

import getMongoose from 'server/lib/getMongoose'

const { mongoose, db } = getMongoose()
const { Schema } = mongoose

const daySchema = new Schema({
  noCount: {
    default: 0,
    required: true,
    type: Number,
  },
  startDate: {
    default: () => {
      const start = new Date()
      start.setUTCHours(0, 0, 0, 0)
      return start
    },
    required: true,
    type: Date,
  },
  yesCount: {
    default: 0,
    required: true,
    type: Number,
  },
})

daySchema.plugin(timestamps)

const Day = db.model('Day', daySchema)

export default Day
