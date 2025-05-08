import Navbar from './compoment/navbar'
import Home from './pages/Home'
import Favorites from './pages/Favorate'
import { Route, Routes } from 'react-router-dom'
import { MovieProvider } from './contex/MovieContext'
import './App.css'

function App() {

  return (
    <MovieProvider className="">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favo" element={<Favorites />} />
          {/* Add more routes as needed */}
        </Routes>
      </main>
    </MovieProvider>
  )
}

export default App
