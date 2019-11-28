import React from 'react'
import './index.scss'
import Page from './page'

class Table extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      header: this.props.options.header || [],
      data: this.props.options.data || []
    }
  }

  render() {
    const _this = this.state
    const headerItems = _this.header.map(item => (
      <th className="c-t-h-item flex-1" key={item.title}>
        {item.title}
      </th>
    ))
    const dataItems = _this.data.map((item, index) => (
      <tr className="c-t-h-tr" key={item.key + '-p-' + index}>
        {_this.header.map(header => (
          <td className="c-t-h-tr-td" key={header.key + '-c-' + index}>
            {item[header.key]}
          </td>
        ))}
      </tr>
    ))
    return (
      <div className="com-table">
        <div className="c-t-table c-t-wrap">
          <table className="c-t-table">
            <thead className="c-t-thead">
              <tr className="tr">{headerItems}</tr>
            </thead>
            <tbody>{dataItems}</tbody>
          </table>
          <div className="c-t-footer">
            <Page />
          </div>
        </div>
      </div>
    )
  }
}

export default Table
