import React from 'react'
import './index.css'

class Page extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      len: 10,
      choosedIndex: 1,
      splitIndex: 5,
      beforeArr: [],
      afterArr: [],
      centerArr: [],
      showLeftMore: 0,
      showRightMore: 0
    }
  }

  componentDidMount() {
    this.sortIndex(1)
  }

  pageChange(p) {
    if (p < 1 || p > this.state.len) {
      return
    }
    this.setState({
      choosedIndex: p
    })
    this.sortIndex(p)
  }

  sortIndex(choosedIndex) {
    let beforeArr = [],
      afterArr = [],
      centerArr = [],
      len = this.state.len,
      splitIndex = this.state.splitIndex,
      leftBorderIndex = choosedIndex - 2,
      rightBorderIndex = choosedIndex + 2,
      startIndex = 1,
      showLeftMore = 0,
      showRightMore = 0

    //判断前省略号边界
    if (leftBorderIndex > startIndex + 1) {
      showLeftMore = 1
      beforeArr = [1]
    } else {
      for (let i = 1; i <= (len < splitIndex ? len : splitIndex); i++) {
        beforeArr.push(i)
      }
    }

    //判断后省略号边界
    if (rightBorderIndex < len - 1) {
      showRightMore = 1
      afterArr = [len]
    } else {
      for (let i = len - splitIndex; i <= len; i++) {
        afterArr.push(i)
      }
    }

    // 插值操作
    if (
      !beforeArr[rightBorderIndex - 1] &&
      choosedIndex < Math.floor(len / 2)
    ) {
      beforeArr.push(rightBorderIndex)
    }

    if (showLeftMore && showRightMore) {
      for (let i = leftBorderIndex; i <= rightBorderIndex && i > 0; i++) {
        centerArr.push(i)
      }
    }

    this.setState({
      beforeArr: beforeArr,
      afterArr: afterArr,
      centerArr: centerArr,
      showLeftMore: showLeftMore,
      showRightMore: showRightMore
    })
  }

  buildItems(arr) {
    let choosedIndex = this.state.choosedIndex
    const result = arr.map(p => (
      <li
        onClick={e => {
          this.pageChange(p)
        }}
        className={p === choosedIndex ? 'c-p-item c-p-i-active' : 'c-p-item'}
        key={p}
      >
        {p}
      </li>
    ))
    return result
  }

  render() {
    const _this = this.state

    return (
      <div className="com-page flex-row flex-vertical-center">
        {/* <img src={ArrowLeft} className="c-p-icon" alt="" /> */}
        <i
          onClick={e => {
            this.pageChange(_this.choosedIndex - 1)
          }}
          className={[
            'iconfont icon-arrorw-left-copy c-p-icon',
            _this.showLeftMore ? 'c-p-arrorw-active' : ''
          ].join(' ')}
        ></i>
        <ul className="flex-row flex-vertical-center">
          {this.buildItems(_this.beforeArr)}
          {_this.showLeftMore > 0 && (
            <i className="iconfont icon-gengduo c-p-icon"></i>
          )}
          {this.buildItems(_this.centerArr)}
          {_this.showRightMore > 0 && (
            <i className="iconfont icon-gengduo c-p-icon"></i>
          )}
          {this.buildItems(_this.afterArr)}
        </ul>
        <i
          onClick={e => {
            this.pageChange(_this.choosedIndex + 1)
          }}
          className={[
            'iconfont icon-arrorw-right-copy c-p-icon',
            _this.showRightMore ? 'c-p-arrorw-active' : ''
          ].join(' ')}
        ></i>
      </div>
    )
  }
}

export default Page
