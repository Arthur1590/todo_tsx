import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import { RoutePaths } from './routes/router'
import Home from './pages/Home'

function App() {
	return (
		<div className='App'>
    <Nav />

    <div className="main">
      <Routes>
        <Route path={RoutePaths.HOME} element={<Home />}/>
      </Routes>
    </div>
		</div>
	)
}

export default App
