
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';

function App() {
  const myName = "Mohammad Anisur Rahman"
  const name = {
    first: "Mohammad Rakibu",
    last: "Islam"
  }
  const nameList = [
    {
      first: "Md",
      last: "anis"
    },
    {
      first: "md",
      last: "babul"
    },
    {
      first: "md",
      last: "asad"
    }
  ]
  return (
    <div className="App">
      <Greet myName={myName}/>
      <Person name={name}/>
<PersonList nameList={nameList} />
    </div>
  );
}

export default App;
