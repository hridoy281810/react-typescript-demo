import React from 'react';
type MultipleProps = {
    name: string
    messageCount?: number 
    isLoading: boolean
}
const MultipleValue = (props: MultipleProps) => {
const {messageCount= 0} = props
  return (
    <div>
     <h2>{
       props.isLoading ? `Welcome ${props.name}! you have ${messageCount} message count`: 
        `Welcome Guest`
        }</h2>
    </div>
  );
};

export default MultipleValue;