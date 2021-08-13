import React from 'react'
import Header from '../Header'
import './index.scss'

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <div className="__container">{children}</div>
    </div>
  )
}

export default Layout
