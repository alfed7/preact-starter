import logo from '#/assets/logo.svg'
import './DefaultLayout.css'
import { ActiveLink } from '#/components/ActiveLink'
import { Children } from '#/types'
import { PageContext } from 'vike/types'

export { DefaultLayout }

export interface IDefaultLayoutProps {
  pageContext?: PageContext,
  children?: Children
}

const DefaultLayout = ({ children }: IDefaultLayoutProps) => {
  return (
      <Layout>
        <Sidebar>
          <Logo />
          <ActiveLink className="navitem" href="/">
            Home
          </ActiveLink>
          <ActiveLink className="navitem" href="/about">
            About
          </ActiveLink>
        </Sidebar>
        <Content>{children}</Content>
      </Layout>
  )
}

const Layout = function ({ children }: IDefaultLayoutProps) {
  return (
    <div
      style={{
        display: 'flex',
        maxWidth: 900,
        margin: 'auto'
      }}
    >
      {children}
    </div>
  )
}

const Sidebar = function ({ children }: IDefaultLayoutProps) {
  return (
    <div
      style={{
        padding: 20,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        lineHeight: '1.8em'
      }}
    >
      {children}
    </div>
  )
}

const Content = function ({ children }: IDefaultLayoutProps) {
  return (
    <div
      id="page-content"
      style={{
        padding: 20,
        paddingBottom: 50,
        borderLeft: '2px solid #eee',
        minHeight: '100vh'
      }}
    >
      {children}
    </div>
  )
}

function Logo() {
  return (
    <div
      style={{
        marginTop: 20,
        marginBottom: 10
      }}
    >
      <a href="/">
        <img src={logo} height={64} width={64} alt="logo" />
      </a>
    </div>
  )
}
