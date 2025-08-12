
import './App.css';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import {BrowserRouter,Route,Routes,link} from "react-router-dom";

function App() {
  return (
    /* page connection*/ 
    <BrowserRouter>
        <Routes>
           <Route path='/' element={<Home/>}></Route>
           <Route path='/menu' element={<Menu/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
