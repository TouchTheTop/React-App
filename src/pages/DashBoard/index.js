import React from 'react'
import { SmallBlock, Tabs, Table } from '../../commom/index'

import './index.css'

class DashBoard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {
        title: '总销售额',
        num: '8846',
        bottom: { title: '日销售额', num: '1234' }
      }
    }
  }

  render() {
    return (
      <div className="container">
        <div className="l-dash l-dash-1 flex-row">
          <SmallBlock data={this.state.data} />
          <SmallBlock data={this.state.data} />
          <SmallBlock data={this.state.data} />
          <SmallBlock data={this.state.data} />
        </div>
        <div className="l-dash flex-row">
          <Tabs items={['Tab1', 'Tab2']}>
            <div key="1">1</div>
            <div key="2">2</div>
            <div key="3">3</div>
          </Tabs>
        </div>
        <div className="l-dash flex-row">
          <Table
            options={{
              header: [
                { title: '排名', key: 'seq' },
                { title: '关键词', key: 'keyword' },
                { title: '用户数', key: 'user' }
              ],
              data: [
                { seq: '1', keyword: 'some', user: 20 },
                { seq: '2', keyword: 'any', user: 12 },
                { seq: '5', keyword: 'all', user: 5 }
              ]
            }}
          />
        </div>
      </div>
    )
  }
}

export default DashBoard
