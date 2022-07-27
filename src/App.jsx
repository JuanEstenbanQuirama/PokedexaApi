import { HashRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import CharacterDetail from './components/CharacterDetail'
import Pokedex from './components/Pokedex'
import UserInput from './components/UserInput'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {

  document.body.style= `background-image: url( "https://i.pinimg.com/originals/a1/86/a8/a186a8aff83506c70b0b307e3fb062c8.png ")`
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<UserInput />} />
        
        <Route element={<ProtectedRoutes />}>
          <Route path='/pokedex' element={<Pokedex />} />
          <Route path='/pokedex/:id' element={<CharacterDetail />} />
        </Route>

      </Routes>
    </HashRouter >
  )
}

export default App
