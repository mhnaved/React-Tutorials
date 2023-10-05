import React, { Component } from 'react'

class ErrorBoundry extends Component {
constructor(props) {
  super(props)

  this.state = {
    hasError:false
  }
}
static getDerivedStateFromError(error) {          /// To display fallback UI
    return{
        hasError:true
    }
}
componentDidCatch(error, info){                // to log error information
  console.log(error)
  console.log(info)
}
  render() {

  if(this.state.hasError) {
    return <h1>something went wrong</h1>
  }
  return this.props.children
  }
}

export default ErrorBoundry