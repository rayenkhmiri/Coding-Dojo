import './App.css';
import {Routes ,Route,Navigate , Link} from "react-router-dom";
import Dashbord from './components/Dashbord';
import Create from './components/create';
import Update from './components/Update';
import ShowOne from './components/ShowOne';



function App() {
  return (
    <div className="App">
      <h1>Note App 🗒️</h1>
      <Link to="/">Home</Link> &nbsp;
      <Link to="/notes/create">Create</Link>
      <Routes>
        <Route path="/" element={<Navigate to="/notes"/>}/>

        {/* READ ALL */}
        <Route path="/notes" element={<Dashbord />}/>

        {/* CREATE NOTE  */}
        <Route path="/notes/create" element={<Create />}/>

        {/* UPDATE NOTE */}
        <Route path="/notes/:id/edit" element={<Update />}/>

        {/* READ ONE */}
        <Route path="/notes/:id" element={<ShowOne />}/>

      </Routes>
    </div>
  );
}

export default App;
