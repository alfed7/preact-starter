import renderToString from 'preact-render-to-string'
import { escapeInject, dangerouslySkipEscape } from 'vike/server'
import logoUrl from '#/assets/logo.svg'
import type { PageContext } from 'vike/types'
import { PageShell } from './PageShell'

export { render }
// See https://vike.dev/data-fetching
export const passToClient = ['pageProps', 'urlPathname']

async function render(pageContext: PageContext) {
  const { Page, pageProps } = pageContext
  const pageHtml = renderToString(
    <PageShell pageContext={pageContext}>
        <Page {...pageProps} />
    </PageShell>
  )

  // See https://vike.dev/head
  const { documentProps } = pageContext
  const title = (documentProps && documentProps.title) || 'Vite SSR app'
  const desc = (documentProps && documentProps.description) || 'App using Vite + Vike'

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
      </head>
      <body>
        ${dangerouslySkipEscape(pageHtml)}
      </body>
    </html>`

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vike.dev/page-redirection
    }
  }
}
