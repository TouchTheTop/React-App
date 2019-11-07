import React from 'react'
import './index.css'
import TabPane from './tab-pane'

class Tab extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: this.props.items || [],
      activeIndex: 0
    }
  }

  itemChange(index) {
    this.setState({
      activeIndex: index
    })
  }

  render() {
    const _this = this.state
    const listItems = this.state.items.map((item, index) => (
      <li
        onClick={e => {
          this.itemChange(index)
        }}
        className={
          index === _this.activeIndex
            ? 'c-t-n-item c-t-n-i-active'
            : 'c-t-n-item'
        }
        key={item}
      >
        {item}
      </li>
    ))
    return (
      <div className="com-tab">
        <div className="c-t-wrap">
          <div className="c-t-nav">
            <ul className="c-t-nav-items flex-row">{listItems}</ul>
          </div>
          <div className="c-t-content">
            <TabPane
              items={this.props.children}
              activeIndex={_this.activeIndex}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Tab
