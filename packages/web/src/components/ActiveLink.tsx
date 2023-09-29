import { usePageContext } from '../hooks/usePageContext'

export { ActiveLink }

const ActiveLink = function (props: any) {
  const pageContext = usePageContext()
  const className = [props.className, pageContext.urlPathname === props.href && 'is-active'].filter(Boolean).join(' ')
  return <a {...props} class={className} />
}
