import React from 'react'
import { connect } from 'react-redux'
import pages from '../../constants/pages'
import cn from 'classnames'
import './index.scss'

const Steps = ({ page }) => (
  <ul className="steps">
    {pages
      .filter((p) => p.hasStep)
      .map(({ label, Icon }, _i) => (
        <li key={_i} className={cn({ __active: _i == page })}>
          <div>{Icon && <Icon />}</div>
          <span>{label}</span>
        </li>
      ))}
  </ul>
)

const mapStateToProps = ({ page }) => ({ page })

export default connect(mapStateToProps)(Steps)
