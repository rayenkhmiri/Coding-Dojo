import './App.css';
import PersonCard from './components/MyComponent';


function App() {
  const users=[{"first_name":"Jane","last_name":"Doe","age":45 , "hairColor":"black"},
  {"first_name":"Smith","last_name":"john","age":88, "hairColor":"brown"},
  {"first_name":"Millard","last_name":"Filmore","age":50,"hairColor":"brown"},
  {"first_name":"Maria","last_name":"Smith","age":62 ,"hairColor":"brown"}]
  return (
    <div className="App">
      {users.map((element,idx) => <div key={idx}><PersonCard user={element} /></div> )}
    </div>
  );
}


export default App;
