import { Routes, Route } from 'react-router-dom';
import './App.css';
import Modes from './components/Modes/Modes';
import GameField from './components/GameField/GameField';

function App() {

  return (
    <div className='container'>
      <Routes>
        <Route path='/' index element={<Modes />} />
        <Route path='/game' element={<GameField />}/>
      </Routes>
    </div>
  )
}

export default App
