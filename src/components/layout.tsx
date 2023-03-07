import { Link, useStaticQuery, graphql } from 'gatsby'
import React, { ReactNode } from 'react'
import {
  container,
  navLinks,
  navLinkItem,
  navLinkText,
  heading,
  siteTitle,
} from '../styles/layout.module.css'

const Layout: React.FC<{ pageTitle: string; children?: ReactNode | undefined }> = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site(siteMetadata: {}) {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div className={container}>
      <header className={siteTitle}>{ data.site.siteMetadata.title }</header>
    <nav>
      <ul className={navLinks}>
        <li className={navLinkItem}>
          <Link to="/" className={navLinkText}>Home</Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/about">About</Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/blog" className={navLinkText}>
            Blog
          </Link>
        </li>
      </ul>
    </nav>
    <main>
      <h1 className={heading}>{pageTitle}</h1>
      {children}
    </main>
  </div>
)}

export default Layout