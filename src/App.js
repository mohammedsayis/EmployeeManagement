
import './App.css';
import Home from './Components/Home';
import { BrowserRouter as Router , Routes ,Route } from 'react-router-dom';
import Add from './Components/Add';
import Edit from './Components/Edit';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Add' element={<Add/>} />
          <Route path='/Edit' element={<Edit/>} />
        </Routes>
       </Router>
       
      </header>
    </div>
  );
}

export default App;
