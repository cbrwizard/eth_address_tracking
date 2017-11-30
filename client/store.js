import createAppStore from 'shared/lib/createAppStore'

const preloadedState = window.__PRELOADED_STATE__
delete window.__PRELOADED_STATE__

const store = createAppStore(false, preloadedState)

export default store
