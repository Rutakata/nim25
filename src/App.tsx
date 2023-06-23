import { Routes, Route } from 'react-router-dom';
import Modes from './components/Modes/Modes';
import GameFieldContainer from './components/GameField/GameFieldContainer';
import './App.css';


const App = () => {
	return (
		<div className='container'>
			<Routes>
				<Route path='/' index element={<Modes />} />
				<Route path='/game' element={<GameFieldContainer />} />
			</Routes>
		</div>
  	)
}

export default App
