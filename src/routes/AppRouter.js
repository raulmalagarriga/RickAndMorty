import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Chapters from '../components/Chapters/Chapters'
import Characters from '../components/Characters/Characters'
import Home from '../components/Home/Home'

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/characters' element={<Characters />} />
            <Route path='/chapters' element={<Chapters />} />
            <Route path='/characters/:id' element={<Characters />} />
        </Routes>
    </BrowserRouter>
  )
}
