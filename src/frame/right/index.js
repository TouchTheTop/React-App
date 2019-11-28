import React from 'react'
import './index.scss'
import Header from './header'
import Main from '../main'

class Right extends React.Component {
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
