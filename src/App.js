import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from "./pages/Header";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Registera from './pagesa/Registera';
import Logina from './pagesa/Logina';
import Task1 from './pages/Task1';
import Card1 from './task1/Card1';
import Task2 from './pages/Task2';
import Task3 from './pages/Task3';
import Copoments1 from './pages/Copoments1';
import Copoments2 from './pages/Copoments2';
import Registera1 from './pages/Registera1';
import Task4 from './pages/Task4';
import Logina1 from './pages/Logina1';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/H" element={<Header/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Registera" element={<Registera/>}/>
          <Route path="/Logina" element={<Logina/>}/>
          <Route path="/Task1" element={<Task1/>}/>
          <Route path="/Card1" element={<Card1/>}/>
          <Route path='/Task3' element={<Task3/>}/>
          <Route path='/Comp1' element={<Copoments1/>}/>
          <Route path='/Comp2' element={<Copoments2/>}/>
          <Route path='/Registera1' element={<Registera1/>}/>
          <Route path='/' element={<Task4/>}/>
          <Route path='/Logina1' element={<Logina1/>}/>
          
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
