import Navbar from './compoment/navbar'
import Home from './pages/Home'
import Favorites from './pages/Favorate'
// import Watch from './pages/watch'
import { Route, Routes } from 'react-router-dom'
import { MovieProvider } from './contex/MovieContext'
import './App.css'

function App() {
  return (
    <MovieProvider>
      <div className="flex flex-col min-h-screen bg-gray-900 text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favo" element={<Favorites />} />

          </Routes>
        </main>
        <footer className="bg-gray-800 py-6 mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
                  Movie4Shabi
                </span>
                <p className="text-sm text-gray-400 mt-1">Your personal movie companion</p>
              </div>
              <p className="text-sm text-gray-400">© {new Date().getFullYear()} Movie4You. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </MovieProvider>
  )
}

export default App
