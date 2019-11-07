import React from 'react'
import ArrowLeft from '../../assets/svg/arrow-left.svg'
import ArrowRight from '../../assets/svg/arrow-right.svg'
import More from '../../assets/svg/more.svg'

import './index.css'

class Page extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      len: 10,
      choosedIndex: 2
    }
  }

  pageChange(p) {
    this.setState({
      choosedIndex: p
    })
  }

  render() {
    const _this = this.state
    let beforeArr = [],
      afterArr = [],
      splitIndex = 5,
      len = _this.len
    for (let i = 1; i <= len; i++) {
      if (i <= splitIndex) {
        beforeArr.push(i)
      } else if (i == len) {
        afterArr.push(i)
      }
    }
    const beforeItems = beforeArr.map(p => (
      <li
        onClick={e => {
          this.pageChange(p)
        }}
        className={
          p === _this.choosedIndex ? 'c-p-item c-p-i-active' : 'c-p-item'
        }
        key={p}
      >
        {p}
      </li>
    ))
    const afterItems = afterArr.map(p => (
      <li
        onClick={e => {
          this.pageChange(p)
        }}
        className={
          p === _this.choosedIndex ? 'c-p-item c-p-i-active' : 'c-p-item'
        }
        key={p}
      >
        {p}
      </li>
    ))
    return (
      <div className="com-page flex-row flex-vertical-center">
        <img src={ArrowLeft} className="c-p-icon" alt="" />
        <ul className="flex-row flex-vertical-center">
          {beforeItems}
          <img src={More} className="c-p-icon" alt="" />
          {afterItems}
        </ul>
        <img src={ArrowRight} className="c-p-icon" alt="" />
      </div>
    )
  }
}

export default Page
