import React from 'react'
import './index.css'
import Menu from '../../commom/Menu'

class Left extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menu: [
        { title: 'Menu1', child: [1, 2, 3] },
        { title: 'Menu2', child: ['a1', 'a2', 'a3'] },
        { title: 'Menu3', child: [1] }
      ]
    }
  }

  render() {
    return (
      <div className="l-container">
        <Menu data={this.state.menu} />
      </div>
    )
  }
}

export default Left
