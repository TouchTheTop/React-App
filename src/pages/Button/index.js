import React from 'react'
import Button from '../../commom/Button'
import CodePanel from '../../component/CodePanel/index'
import './index.scss'

class ButtonPage extends React.Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
    this.state = {
      innerHTML: ''
    }
  }
  componentDidMount() {
    console.log(this.ref)
    this.setState({
      innerHTML: this.ref.current.innerHTML
    })
  }
  render() {
    return (
      <div className="page-button app-wrap">
        <CodePanel code={this.state.innerHTML}>
          <div ref={this.ref}>
            <h2 className="com-title-h2">基础用法</h2>
            <div className="c-b-block com-block">
              <Button size="small">默认</Button>
              <Button size="small" type="success">
                成功
              </Button>
              <Button size="small" type="warning">
                警告
              </Button>
              <Button size="small" type="danger">
                危险
              </Button>
            </div>
            <h2 className="com-title-h2">禁用状态</h2>
            <div className="c-b-block com-block">
              <Button size="small" disabled>
                默认
              </Button>
              <Button size="small" disabled type="success">
                成功
              </Button>
              <Button size="small" disabled type="warning">
                警告
              </Button>
              <Button size="small" disabled type="danger">
                危险
              </Button>
            </div>
            <h2 className="com-title-h2">loading状态</h2>
            <div className="c-b-block com-block">
              <Button size="small" loading>
                默认
              </Button>
              <Button size="small" loading type="success">
                成功
              </Button>
              <Button size="small" loading type="warning">
                警告
              </Button>
              <Button size="small" loading type="danger">
                危险
              </Button>
            </div>
          </div>
        </CodePanel>
      </div>
    )
  }
}

export default ButtonPage
