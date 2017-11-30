import mongoose from 'mongoose'

/**
 * Returns both configured mongoose and a db connection.
 * note: global is used so that mongoose models know about each other.
 */
const getMongoose = () => {
  mongoose.Promise = global.Promise
  // TODO: do research about this for the production
  mongoose.set('debug', true)

  if (!global.db) {
    global.db = mongoose.createConnection(process.env.DB_URL)
  }
  return { db: global.db, mongoose }
}

export default getMongoose
