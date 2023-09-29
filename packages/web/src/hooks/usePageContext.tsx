// `usePageContext` allows us to access `pageContext` in any React component.
// More infos: https://vike.dev/pageContext-anywhere

import { Children } from '#/types'
import { createContext } from 'preact'
import { useContext } from 'preact/hooks'

export { PageContextProvider }
export { usePageContext }

const Context = createContext(undefined)

export interface IPageContextProviderProps {
  pageContext: any,
  children: Children
} 
const PageContextProvider = function ({ pageContext, children }: IPageContextProviderProps) {
  return <Context.Provider value={pageContext}>{children}</Context.Provider>
}

function usePageContext(): any {
  const pageContext = useContext(Context)
  return pageContext
}
