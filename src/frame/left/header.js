import React from 'react'
import './index.css'
import logo from '../../logo.svg'

class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="l-header">
        <img src={logo} className="l-h-logo" alt="logo" />
        Christine's APP Pro
      </div>
    )
  }
}

export default Header
