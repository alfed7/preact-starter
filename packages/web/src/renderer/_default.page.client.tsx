export { render }

import '#/style'

import { ContainerNode, hydrate } from 'preact'
import type { PageContext } from 'vike/types'
import { PageShell } from './PageShell'

async function render(pageContext: PageContext) {
  const { Page, pageProps } = pageContext
  const body = document.querySelector('body') as ContainerNode
  hydrate(
    <PageShell pageContext={pageContext}>
        <Page {...pageProps} />
    </PageShell>,
    body
  )
}
