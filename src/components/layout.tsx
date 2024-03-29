import * as React from "react"
import { Link } from "gatsby"

const Layout = ({
  location,
  title,
  children,
}: {
  location?: Location
  title?: string
  children?: React.ReactNode
}) => {
  //@ts-ignore
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location?.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer className="minimal-footer">Made by Zach Stone</footer>
    </div>
  )
}

export default Layout
