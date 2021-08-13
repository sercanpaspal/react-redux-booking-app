import React, { Suspense, useEffect } from 'react'
import { connect } from 'react-redux'
import Layout from './components/Layout'
import LoaderContent from './components/LoaderContent'

import pages from './constants/pages'

import Steps from './components/Steps'

const App = ({ page }) => {
  const { Component, label, hasStep } = pages[page]

  useEffect(
    () => (document.title = `${label} - Otel Rezervasyon Sistemi`),
    [page],
  )

  return (
    <Layout>
      {hasStep && <Steps />}
      <Suspense fallback={<LoaderContent />}>
        <Component />
      </Suspense>
    </Layout>
  )
}

const mapStateToProps = ({ page }) => ({ page })

export default connect(mapStateToProps)(App)
