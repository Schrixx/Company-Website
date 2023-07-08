import { Routes, Route } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Main from './pages/Main'

const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
