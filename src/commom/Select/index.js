import React from 'react'
import './index.css'
import { ThemeContext } from '../../context/themes'

class Select extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      choosedIndex: 1,
      data: this.props.data || []
    }
  }

  change(i) {
    this.setState({
      choosedIndex: i
    })
    this.props.change()
  }

  render() {
    let _this = this.state
    let theme = this.context.theme
    const items = _this.data.map((v, i) => (
      <li
        key={i}
        onClick={e => {
          this.change(i)
        }}
        className="c-s-li"
        style={{
          border:
            _this.choosedIndex === i ? `1px solid ${theme.beforeColor}` : '',
          color: _this.choosedIndex === i ? theme.beforeColor : ''
        }}
      >
        <span>{v}</span>
      </li>
    ))
    return (
      <div className="com-select">
        <div className="c-s-ul c-se-wrap">
          <ul className="flex-row">{items}</ul>
        </div>
      </div>
    )
  }
}

Select.contextType = ThemeContext
export default Select
