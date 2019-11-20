import React from 'react'
import Button from '../../commom/Button'
import './index.css'

class ButtonPage extends React.Component {
  render() {
    return (
      <div className="page-button app-wrap">
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
    )
  }
}

export default ButtonPage
