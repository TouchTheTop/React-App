import React from 'react'
import './index.css'
import Header from './header'
import { ThemeContext } from '../../context/themes'
import { _ } from '../../util/common'

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: this.props.data
    }
    this.changeStatus = this.changeStatus.bind(this)
  }

  componentDidMount() {
    console.log(_.isArray([]))
  }

  menuClick(e) {
    e.stopPropagation()
    let dom = e.currentTarget
    let sub = dom.nextElementSibling
    this.clearActive(['c-m-sub', 'c-m-c-item'])
    this.changeStatus(sub)
  }

  clearActive(classNames) {
    if (_.isArray(classNames)) {
      for (let j = 0, len = classNames.length; j < len; j++) {
        let activeDom = document.getElementsByClassName(classNames[j])
        this.clearSubActive(activeDom)
      }
    } else {
      let activeDom = document.getElementsByClassName(classNames)
      this.clearSubActive(activeDom)
    }
  }

  clearSubActive(obj) {
    if (!obj) {
      return
    }
    for (let i = 0, len = obj.length; i < len; i++) {
      if (obj[i].className.indexOf('active') < 0) {
        continue
      }
      obj[i].className = obj[i].className.slice(
        0,
        obj[i].className.indexOf('active')
      )
    }
  }

  changeStatus(dom) {
    if (!dom) {
      return
    }
    let className = dom.className ? dom.className.split(' ') : '',
      index = className.indexOf('active')
    if (index > 0) {
      className.splice(index, 1)
    } else {
      className.push('active')
    }
    dom.className = className.join(' ')
  }

  itemClick(e) {
    e.stopPropagation()
    this.clearActive('c-m-c-item')
    this.changeStatus(e.currentTarget)
  }

  render() {
    const _this = this.state
    let theme = this.context.theme
    const menu = _this.data.map(t => (
      <li key={t.title}>
        <a
          className="c-m-link"
          href={'#' + t.path}
          style={{ color: theme.backgroundText }}
          onClick={e => {
            this.menuClick(e, 1)
          }}
        >
          <div className="c-m-title flex-two-sides">
            {t.title}
            {t.sub && (
              <span
                style={{ color: theme.backgroundText }}
                className="iconfont icon-zhankai"
              ></span>
            )}
          </div>
        </a>
        <ul className="c-m-sub" style={{ background: theme.secondColor }}>
          {t.sub &&
            t.sub.map(v => (
              <li
                key={v.title}
                className="c-m-c-item"
                onClick={e => {
                  this.itemClick(e)
                }}
              >
                <a href={'#' + v.path} style={{ color: theme.backgroundText }}>
                  {v.title}
                </a>
              </li>
            ))}
        </ul>
      </li>
    ))
    return (
      <div className="com-menu" style={{ background: theme.backgroundColor }}>
        <div className="c-m-wrap">
          <Header />
          <ul>{menu}</ul>
        </div>
      </div>
    )
  }
}

Menu.contextType = ThemeContext
export default Menu
