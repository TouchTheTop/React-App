import React from 'react'

class Collapse extends React.Component {
  render() {
    return (
      <div className="com-collapse">
        <div className="c-c-panel">
          {React.Children.map(this.props.children, child => child)}
        </div>
      </div>
    )
  }
}

export default Collapse
