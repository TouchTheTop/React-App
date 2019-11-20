import React from 'react'
import './index.css'

class Button extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ...this.props,
      ButtonTypes: this.props.type || 'default',
      ButtonShapes: this.props.shape || 'round',
      ButtonSizes: this.props.size || 'default'
    }
  }
  render() {
    const _this = this.state
    const ButtonTypes = [
      'default',
      'primary',
      'ghost',
      'dashed',
      'danger',
      'link'
    ]
    const ButtonShapes = ['circle', 'circle-outline', 'round']
    const ButtonSizes = ['large', 'default', 'small']
    return (
      <button
        disabled={_this.disabled}
        className={`c-b-button ${'c-b-type--' +
          _this.ButtonTypes} ${'c-b-shape--' +
          _this.ButtonShapes} ${'c-b-size--' + _this.ButtonSizes} ${
          _this.loading ? 'is-loading' : ''
        }`}
      >
        {_this.loading && (
          <i className="iconfont icon-jiazai2 com-loading-icon"></i>
        )}
        <span>{React.Children.map(this.props.children, child => child)}</span>
      </button>
    )
  }
}

export default Button
