import React from 'react'
import ReactDOMServer from 'react-dom/server'
import serializeJavascript from 'serialize-javascript'
import fs from 'fs'
import { SheetsRegistry } from 'react-jss/lib/jss'
import JssProvider from 'react-jss/lib/JssProvider'
import { create } from 'jss'
import preset from 'jss-preset-default'
import createGenerateClassName from 'material-ui/styles/createGenerateClassName'
import { MuiThemeProvider } from 'material-ui/styles'

import { setFailedResponse } from 'server/lib/responses'
import createStore from 'server/lib/createStore'

import Root from 'client/components/Root'

const htmlWithReact = (store, sheetsRegistry) => {
  const jss = create(preset())
  jss.options.createGenerateClassName = createGenerateClassName

  const content = (
    <JssProvider registry={sheetsRegistry} jss={jss}>
      <MuiThemeProvider sheetsManager={new Map()}>
        <Root store={store} />
      </MuiThemeProvider>
    </JssProvider>
  )
  return ReactDOMServer.renderToString(content)
}

// @note React must be rendered with sheetsRegistry before it
// can be converted into a string.
// @see https://material-ui-next.com/guides/server-rendering/
const prepareHtml = (indexHtmlFile, store) => {
  const sheetsRegistry = new SheetsRegistry()

  return indexHtmlFile
    .replace('**CONTENT**', htmlWithReact(store, sheetsRegistry))
    .replace('**STATE**', serializeJavascript(store.getState()))
    .replace('**STYLE**', sheetsRegistry.toString())
}

const get = async (ctx) => {
  try {
    return await new Promise(async (resolve, reject) => {
      const store = await createStore(ctx)

      fs.readFile('dist/index.html', 'utf8', (err, indexHtmlFile) => {
        if (err) {
          return reject(err)
        }

        ctx.body = prepareHtml(indexHtmlFile, store)
        return resolve()
      })
    })
  } catch (err) {
    return setFailedResponse(ctx, err)
  }
}

export default {
  get,
}
