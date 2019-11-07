import React from 'react'
import './index.css'
import Header from './header'
import Main from '../main'

class Right extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="r-container">
        <Header />
        <Main />
      </div>
    )
  }
}

export default Right
