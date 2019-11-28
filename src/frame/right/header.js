import React from 'react'
import './index.scss'
import Select from '../../commom/Select'
import { ThemeContext } from '../../context/themes'

class Header extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme, toggleTheme }) => (
          <div className="r-header flex-two-sides">
            <div className="r-left flex-row flex-vertical-center">
              <Select data={['白天', '黑夜']} change={toggleTheme} />
            </div>
            <div className="r-right">hello,christine!</div>
          </div>
        )}
      </ThemeContext.Consumer>
    )
  }
}

export default Header
