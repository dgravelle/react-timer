import React from 'react'
import {render} from 'react-dom'

class App extends React.Component {
  render () {
    return <p>Something rules these woods.  Someone....</p>
  }
}

render(<App />, document.getElementById('app'));
