import React from 'react'
import './index.scss'

class SmallBlock extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const data = this.props.data
    return (
      <div className="com-smallb">
        <div className="c-s-wrap">
          <div className="c-s-nav flex-row">
            <span>{data.title}</span>
          </div>
          <div className="c-s-num">
            <span>{data.num}</span>
          </div>
          <div className="c-s-bottom">
            <span className="c-s-b-title">{data.bottom.title}</span>
            <span>{data.bottom.num}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default SmallBlock
