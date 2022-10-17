import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import About from './Components/About';
import Home from './Components/Home';





function App() {

  

let numero = 5;
let palabra= "Hello";
let color1 = "blue";
let color2 = "red";

  return (
    <BrowserRouter>
      <p>
          <Link to="/">Home</Link>
          |
          <Link to="/about">About</Link>
          |
          <Link to={`/${numero}`}>{numero}</Link>
          |
          <Link to={`/${palabra}/${color1}/${color2}`}>{palabra}</Link>
      </p>   
      <Routes>
          <Route path='/' element={<Home/>} />         
          <Route path='/about' element={<About/>} />   
          <Route path={`/${numero}`} element={<div>El numero es : {numero}</div>}></Route>  
          <Route path={`/${palabra}/${color1}/${color2}`} element={<div style={{backgroundColor:`${color1}`, color:`${color2}`}}> The Word is : {palabra}</div>}></Route>  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
