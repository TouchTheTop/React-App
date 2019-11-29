import React from 'react'
import './index.scss'
import PropTypes from 'prop-types'
import Highlight from 'react-highlight'
import { _ } from '../../util/common'
import prettier from 'prettier/standalone'
import parserHTML from 'prettier/parser-html'

// import beautify from 'js-beautify'
class CodePanel extends React.Component {
  constructor(props) {
    super(props)
    this.state = { ...props, show: true }
  }
  componentDidMount() {
    console.log('this.props.code')
    console.log(this.props.code)
  }
  render() {
    return (
      <div className="cpt-codepanel">
        <div className="cpt-c-panel">
          {React.Children.map(this.props.children, child => child)}
        </div>
        <div className="cpt-c-content">
          <span className="cpt-c-c-title">{this.state.title}</span>
          {this.state.desp}
        </div>
        <div className="cpt-c-bottom">
          <span
            className={`iconfont ${
              this.state.show ? 'icon-ai-code' : 'icon-zitidaima'
            }`}
            onClick={e => {
              this.setState({
                show: !this.state.show
              })
            }}
          ></span>
          <span className="iconfont icon-fuzhi"></span>
        </div>
        {this.state.show && (
          <div className="cpt-c-code">
            <Highlight language="html">
              {prettier.format(this.props.code, {
                parser: 'html',
                plugins: [parserHTML]
              })}
            </Highlight>
          </div>
        )}
      </div>
    )
  }
}

CodePanel.propTypes = {
  title: PropTypes.string,
  desp: PropTypes.string
}

CodePanel.defaultProps = {
  title: '默认版块',
  desp: '描述'
}
export default CodePanel
