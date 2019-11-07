import React from 'react'
import './index.css'

class TabPane extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: this.props.items || []
    }
  }

  render() {
    const _this = this.state
    const now = _this.items[this.props.activeIndex]
    const item = (
      <div className="c-t-p-item" key={now}>
        {now}
      </div>
    )
    return <div className="com-tab-pane">{item}</div>
  }
}

export default TabPane
