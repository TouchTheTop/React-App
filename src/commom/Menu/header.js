import React from 'react'
import './index.scss'
import logo from '../../logo.svg'
import { ThemeContext } from '../../context/themes'

class Header extends React.Component {
  render() {
    const theme = this.context.theme
    return (
      <div
        className="l-header"
        style={{
          color: theme.backgroundText
        }}
      >
        <img src={logo} className="l-h-logo" alt="logo" />
        Christine's APP Pro
      </div>
    )
  }
}

Header.contextType = ThemeContext

export default Header
