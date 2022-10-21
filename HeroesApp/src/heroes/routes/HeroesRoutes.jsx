import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Navbar } from '../components/NavBar'
import Marvel from '../pages/Marvel'
import DC from '../pages/DC'
import Search from '../pages/Search'
import Hero from '../pages/Hero'


const HeroesRoutes = () => {
    return (
        <>
            <Navbar></Navbar>

            <div className='container'><Routes>


                <Route path='marvel' element={<Marvel></Marvel>}></Route>
                <Route path='dc' element={<DC></DC>}></Route>
                <Route path='search' element={<Search></Search>}></Route>
                <Route path='hero/:heroId' element={<Hero></Hero>}></Route>




                <Route path='/' element={<Navigate to='marvel'></Navigate>}></Route>


            </Routes></div>


        </>
    )
}

export default HeroesRoutes