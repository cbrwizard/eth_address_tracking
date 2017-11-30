import { reduxForm } from 'redux-form'

import AddressesForm from 'client/components/AddressesForm'
import { ADDRESSES_FORM } from 'client/constants/forms'

/*
 * Is responsible for connecting a AddressesForm to ReduxForm.
 */
const ConnectedAddressesForm = reduxForm({
  form: ADDRESSES_FORM,
})(AddressesForm)

export default ConnectedAddressesForm
