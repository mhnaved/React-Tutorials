                      // Regular Component 

// import React, { Component } from 'react'

// class PureComp extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//        data: 10
//     }
//   }
//   render() {
//     console.warn(this.state)
//     return (
//       <div>
//         <div>
//           <h1>Regular Component {this.state.data}</h1>
//           <button onClick={()=>{this.setState({data:20})}}>Update State</button>
//         </div>
//       </div>
//     )
//   }
// }

// export default PureComp


// import React from 'react';
  
// class Comp1 extends React.Component {
//   render() {
//     console.log('Child Component is called');
//     return <h1>{this.props.value}</h1>;
//   }
// }
  
// class PureComp extends React.Component {
//   state = { color: 'black' };
//   render() {
//     return (
//       <div style={{ color: this.state.color }}>
//         <Comp1 value="Rahul" />
//         <button onClick={() => this.setState({ color: 'green' })}>
//           Change Color
//         </button>
//       </div>
//     );
//   }
// }
// export default PureComp;



                           // Pure Component 

// import React from "react"

//  class PureComp extends React.PureComponent {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//        data: 10
//     }
//   }
//   render() {
//     console.warn(this.state)
//     return (
//       <div>
//         <div>
//           <h1>Pure Component {this.state.data}</h1>
//           <button onClick={()=>{this.setState({data:20})}}>Update State</button>
//         </div>
//       </div>
//     )
//   }
// }

// export default PureComp



import React from 'react';
  
class Comp1 extends React.PureComponent {
  render() {
    console.log('Child Component is called');
    console.log('child component is rendered only first time.')
    return <h1>{this.props.value}</h1>;
  }
}
  
class PureComp extends React.Component {
  state = { color: 'black' };
  render() {
    return (
      <div style={{ color: this.state.color }}>
        <Comp1 value="Talib" />
        <button onClick={() => this.setState({ color: 'green' })}>
          Change Color
        </button>
      </div>
    );
  }
}
export default PureComp;




//If you use React.Component then the child component is also re-rendered if the parent component re-renders itself 
//but in the React.PureComponent, the child component only re-renders if the props passed to it changes.
