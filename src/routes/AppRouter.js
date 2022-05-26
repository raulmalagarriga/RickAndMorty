import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Chapters from '../components/Chapters/Chapters'
import Characters from '../components/Characters/Characters'
import OneCharacter from '../components/Characters/OneCharacter'
import Home from '../components/Home/Home'
import ScrollToTop from './ScrollToTop'

export const AppRouter = () => {
  return (
    <BrowserRouter>
    <ScrollToTop />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/characters' element={<Characters />} />
            <Route path='/chapters' element={<Chapters />} />
            <Route path='/characters/:id' element={<OneCharacter />} />
        </Routes>
    </BrowserRouter>
  )
}
