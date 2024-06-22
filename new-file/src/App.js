import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import View from './View/View';
import Create from './Component/Create';
import Update from './Component/Update';
import Read from './Component/Read';

function App() {
  return (
    <div className="App">
     <BrowserRouter>

     <Routes>
      <Route path='/' element={<View/>}></Route>
      <Route path='/Create' element={<Create/>}></Route>
      <Route path='/Update/:id' element={<Update/>}></Route>
      <Route path='/read/:id' element={<Read/>}></Route>

     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
