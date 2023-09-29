export { PageShell }

import './PageShell.css'
import { DefaultLayout } from '#/layouts/DefaultLayout'
import { PageContextProvider } from '#/hooks/usePageContext'
import { PageContext } from 'vike/types'
import { Children } from '#/types'

export interface IPageShellProps {
  pageContext?: PageContext,
  children?: Children
}

function PageShell({ children, pageContext }: IPageShellProps) {
  const Layout = pageContext?.exports.Layout as any || DefaultLayout
  return (
    <PageContextProvider pageContext={pageContext}>
      <Layout>{children}</Layout>
    </PageContextProvider>
  )
}