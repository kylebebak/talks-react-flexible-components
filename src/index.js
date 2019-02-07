import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const WidthContext = React.createContext(window.innerWidth)

class WindowWidthProvider extends React.Component {
  constructor() {
    super()
    this.state = { width: window.innerWidth }
  }

  componentDidMount() {
    window.addEventListener('resize', ({ target }) =>
      this.setState({ width: target.innerWidth })
    )
  }

  componentWillUnmount() {
    window.removeEventListener('resize')
  }

  render() {
    return (
      <WidthContext.Provider value={this.state.width}>
        {this.props.children}
      </WidthContext.Provider>
    )
  }
}

class WithWindowWidth extends React.Component {
  render() {
    return (
      <WidthContext.Consumer>
        {value => this.props.children(value)}
      </WidthContext.Consumer>
    )
  }
}

function Example() {
  const [on, toggle] = useState(true)

  return (
    <div>
      <p>{on ? 'It\'s on' : 'It\'s off'}</p>
      <button onClick={() => toggle(!on)}>
        Click me
      </button>
    </div>
  )
}

const App = () => {
  return (
    <WindowWidthProvider>
      <WithWindowWidth>
        {width => <div>Width is {width}</div>}
      </WithWindowWidth>

      <div>
        <WithWindowWidth>
          {width => <span>{width}</span>}
        </WithWindowWidth>
      </div>

      <Example />
    </WindowWidthProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
