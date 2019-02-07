import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse
    return (
      <img
        src="/cat.svg"
        style={{ position: 'absolute', left: mouse.x, top: mouse.y, height: 50, width: 50 }}
      />
    )
  }
}

class Mouse extends React.Component {
  state = { x: 0, y: 0 }

  handleMouseMove = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY,
    })
  }

  render() {
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    )
  }
}

Mouse.PropTypes = {
  render: PropTypes.func.isRequired,
}

class MouseTracker extends React.Component {
  render() {
    return (
      <Mouse render={mouse => <Cat mouse={mouse} />} />
    )
  }
}

ReactDOM.render(<MouseTracker />, document.getElementById('root'))
