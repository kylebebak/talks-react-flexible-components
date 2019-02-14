import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

class WithDimensions extends React.Component {
  state = { width: window.innerWidth, height: window.innerHeight }

  handleResize = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight })
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  render() {
    const { width, height } = this.state
    return <this.props.Component width={width} height={height} />
  }
}

WithDimensions.propTypes = {
  Component: PropTypes.func.isRequired,
}

const ResponsiveDiv = ({ width, height }) => {
  return <span>{width}, {height}</span>
}

class App extends React.Component {
  render() {
    return (
      <WithDimensions
        Component={ResponsiveDiv}
      />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
