import React from 'react';
type ersonName = {
name:{
  first: string
  last: string
}
}
const Person = (props: ersonName) => {
  return (
    <div>
<h2>{props.name.first} {props.name.last}</h2>
    </div>
  );
};

export default Person;