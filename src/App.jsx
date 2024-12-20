import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Skills from './pages/Skills/Skills'
import Contact from './pages/Contact/Contact'
// import AboutMe from './pages/AboutMe/AboutMe'
import Portfolio from './pages/Portfolio/Portfolio'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<Skills />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/contact' element={<Contact />} />
      {/* <Route path='about-me' element={<AboutMe />} /> */}
    </Routes>
  )
}

export default App
