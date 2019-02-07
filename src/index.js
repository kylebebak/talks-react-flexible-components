import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

class WithMouseCoords extends React.Component {
  state = { x: 0, y: 0 }

  handleMouseMove = (e) => {
    this.setState({ x: e.clientX, y: e.clientY })
  }

  render() {
    const { x, y } = this.state
    return (
      <div
        style={{ width: '100vw', height: '100vh' }}
        onMouseMove={this.handleMouseMove}
      >
        <this.props.Component x={x} y={y} />
      </div>
    )
  }
}

WithMouseCoords.propTypes = {
  Component: PropTypes.func.isRequired,
}

const Cat = (props) => {
  const { x, y } = props

  return (
    <img
      src="./cat.svg"
      style={{ width: 100, height: 100, position: 'absolute', top: y, left: x }}
    />
  )
}

class CatChasingMouse extends React.Component {
  render() {
    return (
      <WithMouseCoords
        Component={Cat}
      />
    )
  }
}

ReactDOM.render(<CatChasingMouse />, document.getElementById('root'))
