import './App.css';
import UserCard from './components/MyComponent';

function App() {
  const user=[{first_name:'Jane',last_name:'Doe',age:45,hair_color:'Black'},
  {firs_name:'John',last_name:'Smith',age:88,hair_color:'Brown'}]
return (
<div className="App">
{user.map((user,idx)=> <UserCard key={idx} user={user} />)}
</div>
);
}

export default App;