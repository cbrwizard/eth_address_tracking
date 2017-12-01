import { connect } from 'react-redux'

import EventsList from 'client/components/EventsList'

const mapStateToProps = state => ({
  events: state.app.events,
})

const mapDispatchToProps = undefined

const EventListContainer = connect(mapStateToProps, mapDispatchToProps)(EventsList)

export default EventListContainer
