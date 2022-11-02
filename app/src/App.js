import { Route, Routes } from 'react-router-dom';
import { Home } from './views/Home/Home'
import { Exercice } from './views/Exercice/Exercice';
import { Result } from './views/Result/Result'
import './App.css';

const App = () => {
  return (
    <div className="App"> 
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/exercice' element={<Exercice />}></Route>
        <Route path='/result' element={<Result />}></Route>
      </Routes>
    </div>
  );
}

export default App;
