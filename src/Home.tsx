import React from 'react';
import Status from './components/Status';
import Header from './components/Header';
import Oscar from './components/Oscar';
import MultipleValue from './components/MultipleValue';

const Home = () => {
  return (
    <div>
 <Status status='success'/>
 <Header>Placeholder text</Header>
  <Oscar>
    <Header > Oscar goes to leonardo Dicpario!
  </Header>
  </Oscar>
  <MultipleValue name="anis" messageCount={38} isLoading={true} />

    </div>
  );
};

export default Home;