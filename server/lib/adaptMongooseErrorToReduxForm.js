import R from 'ramda'
import RS from 'ramdasauce'

// TODO: try to find a cool way to check this. Preferebly without RS.
const isMongooseErrors = errors =>
  R.none(RS.isNilOrEmpty)(R.values(errors).map(value => value.message))

/*
 * Is responsible for adapting a Mongoose type validation error into ReduxForm
 * type.
 * TODO: convert into a better system so that client decides what to show.
 * Basically, this function should return an object like this:
 * {
 *   email: { type: 'required' },
 *   password: { type: 'minlength', minlength: 6 },
 * }
 * Then a client receives it under a key 'details'. Then it should use a second
 * adapter to extract the corresponding messages from this details object, using
 * translate to follow the locales.
 * After this change, this function should be renamed to
 * adaptMongooseErrorForClient.
 * TODO: make it work with unique emails after move.
 */
const adaptMongooseErrorToReduxForm = (mongooseErrors) => {
  if (!isMongooseErrors(mongooseErrors)) { return false }
  const result = {}

  R.forEachObjIndexed((value, key) => {
    result[key] = R.dropLast(1,
      R.replace(`(\`${value.value}\`) `, '',
        R.replace(`Path \`${key}\` `, '', value.message)
      )
    )
  }, mongooseErrors)
  return result
}

export default adaptMongooseErrorToReduxForm
