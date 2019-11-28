import React from 'react'
import './index.scss'
import Menu from '../../commom/Menu'
import TreeData from './tree'

class Left extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menu: [
        { title: 'Menu1', sub: [1, 2, 3] },
        { title: 'Menu2', sub: ['a1', 'a2', 'a3'] },
        { title: 'Menu3', sub: [1] }
      ]
    }
  }

  render() {
    return (
      <div className="l-container">
        <Menu data={TreeData} />
      </div>
    )
  }
}

export default Left
