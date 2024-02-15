import React from 'react';
type Greettype = {
    myName: string
}
const Greet = (props:Greettype) => {
  return (
    <div>
  <h1>My name is {props.myName}</h1>
    </div>
  );
};

export default Greet;