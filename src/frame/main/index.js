import React from 'react'
import './index.css'

// import { Router } from 'react-router'
import { HashRouter as Router } from 'react-router-dom'
import routes from '../../routeConfig'
import renderRouter from '../../util/renderRouter'

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <Router>{renderRouter(routes)}</Router>
      </div>
    )
  }
}

export default Main
