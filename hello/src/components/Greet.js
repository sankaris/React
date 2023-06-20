import React from 'react'

/*function Greet() {
    return <h1> Hello Siva!</h1>
}*/

const Greet = (props) => {
 return (
    <div>
      <h1>Hello {props.name} {props.lastName}!</h1>
      <p>{props.children}</p>
    </div>
 )
}
export default Greet