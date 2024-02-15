import React from 'react';
import Button from './components/eventComponents/Button';
import Input from './components/eventComponents/Input';

const EventHome = () => {
  return (
    <div>
    <Button handleClick={(event,id)=>{
        console.log('button clicked',event,id);
    }}/>
    <Input value='' handleChange={(event)=> console.log(event)
    }/>
    </div>
  );
};

export default EventHome;