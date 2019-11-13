import React from 'react'
import './index.css'
import Header from './header'
import { ThemeContext } from '../../context/themes'

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: this.props.data
    }
    this.changeStatus = this.changeStatus.bind(this)
  }

  menuClick(e) {
    e.stopPropagation()
    let dom = e.currentTarget
    let child = dom.nextElementSibling
    this.clearActive('c-m-child')
    this.changeStatus(child)
  }

  clearActive(className) {
    let activeDom = document.getElementsByClassName(className)
    for (let i = 0, len = activeDom.length; i < len; i++) {
      if (activeDom[i].className.indexOf('active') < 0) {
        continue
      }
      activeDom[i].className = activeDom[i].className.slice(
        0,
        activeDom[i].className.indexOf('active')
      )
    }
  }

  changeStatus(dom) {
    let className = dom.className.split(' '),
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
      <li>
        <div
          className="c-m-title flex-two-sides"
          onClick={e => {
            this.menuClick(e, 1)
          }}
        >
          <span style={{ color: theme.backgroundText }}>{t.title}</span>
          <span
            style={{ color: theme.backgroundText }}
            className="iconfont icon-zhankai"
          ></span>
        </div>
        <ul className="c-m-child" style={{ background: theme.secondColor }}>
          {t.child.map(v => (
            <li
              className="c-m-c-item"
              onClick={e => {
                this.itemClick(e)
              }}
            >
              <a href="#" style={{ color: theme.backgroundText }}>
                {v}
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
