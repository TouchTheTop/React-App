import React from 'react'
import './index.css'
import Header from './header'

class Left extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="l-container">
        <Header />
        我是左组件
      </div>
    )
  }
}

export default Left
