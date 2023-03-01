import { Link, PageProps } from 'gatsby'
import { listenerCount } from 'process';
import React, { ReactNode } from 'react'
import {
  container,
  navLinks,
navLinkItem,
  navLinkText,
heading,
} from '../styles/layout.module.css'

const Layout: React.FC<{ pageTitle: string; children?: ReactNode | undefined}> = ({ pageTitle, children }) => (
  <div className={container}>
    <nav>
      <ul className={navLinks}>
        <li className={navLinkItem}>
          <Link to="/" className={navLinkText}>Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
    <main>
      <h1 className={heading}>{pageTitle}</h1>
      {children}
    </main>
  </div>
)

export default Layout