import { Routes, Route } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Artwork from './pages/Artwork'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/artwork' element={<Artwork />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
