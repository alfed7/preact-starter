import { JSX } from "preact/jsx-runtime"

declare global {
  namespace Vike {
    interface PageContext {
      user?: {
        name: string
        id: string
        isAdmin: boolean
      }
      documentProps?: DocumentProps
      pageProps?: PageProps
      Page: (pageProps: PageProps) => JSX.Element
    }
  }
}
type DocumentProps = {
  title?: string,
  description?: string
}
type PageProps = {
}

export {}