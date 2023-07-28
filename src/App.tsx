import { Routes, Route } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Artwork from './pages/Artwork'
import Home from './pages/Home'

const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/artwork' element={<Artwork />} />
      </Routes>
    </>
  )
}

export default App
