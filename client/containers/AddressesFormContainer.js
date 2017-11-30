import { connect } from 'react-redux'

import { add } from 'client/actions/addresses'
import ConnectedAddressesForm from 'client/containers/ConnectedAddressesForm'

const mapStateToProps = undefined

const mapDispatchToProps = dispatch => ({
  onSubmit: (values) => {
    dispatch(add(values.address))
  },
})

const AddressFormContainer = connect(mapStateToProps, mapDispatchToProps)(ConnectedAddressesForm)

export default AddressFormContainer
