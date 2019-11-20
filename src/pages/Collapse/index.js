import React from 'react'
import Collapse from '../../commom/Collapse'
import './index.css'

class ButtonPage extends React.Component {
  render() {
    return (
      <div className="page-button app-wrap">
        <h2 className="com-title-h2">折叠面板</h2>
        <div className="c-b-block com-block">
          <Collapse>默认</Collapse>
        </div>
      </div>
    )
  }
}

export default ButtonPage
