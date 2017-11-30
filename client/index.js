/*
 * An entry point for both styles and scripts.
 */
import 'babel-polyfill'
import 'whatwg-fetch'

import 'client/styles/index'
import render from 'client/lib/render'
import Root from 'client/components/Root'
import store from 'client/store'

render(Root, store)
