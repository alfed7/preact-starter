export { render }

import { ContainerNode, hydrate } from 'preact'
import { PageShell } from './PageShell'

async function render(pageContext: any) {
  const { Page, pageProps } = pageContext
  const body = document.querySelector('body') as ContainerNode
  hydrate(
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>,
    body
  )
}
