import React from 'react'

class App extends React.Component {
  static async getInitialProps(ctx) {
    console.log('something', ctx)
  }

  render() {
    return (
      <div>
        <h1>SSR APP</h1>
      </div>
    )
  }
}

export default App
