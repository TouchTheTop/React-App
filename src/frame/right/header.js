import React from 'react'
import './index.css'

class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="r-header flex-two-sides">
        <div className="r-left"></div>
        <div className="r-right">hello,christine!</div>
      </div>
    )
  }
}

export default Header
