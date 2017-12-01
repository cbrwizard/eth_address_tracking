import { connect } from 'react-redux'

import { remove } from 'client/actions/addresses'
import AddressesList from 'client/components/AddressesList'

const mapStateToProps = state => ({
  addresses: state.app.addresses,
})

const mapDispatchToProps = dispatch => ({
  onRemoveClick: (address) => {
    dispatch(remove(address))
  },
})

const AddressListContainer = connect(mapStateToProps, mapDispatchToProps)(AddressesList)

export default AddressListContainer
