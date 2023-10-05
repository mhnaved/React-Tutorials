import React from "react";



// Functional Component
// export const ReactProps=(props)=> {
//     console.log(props);

    // we can not change the props value bcz it is immutable.
    // props.name = "Jamshed";
//     return (
//         <div>
//             <h1>Hello {props.name}  {props.last}</h1>
//             {props.children}
//         </div>
//     )
// }
// export default ReactProps;



// Class componet

class ReactProps extends React.Component{
    render(){
        return <h1>Hello {this.props.name}</h1>
    }
}

export default ReactProps;