import { render,screen } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { AuthContext } from "../src/auth/context/AuthContext"
import NavBar from '../src/heroes/components/NavBar'


describe('Navbar', () => { 

    const contextValue = {
        logged: true,
        user: {
            name: 'Santiago Lizarazo',
            id: 'ABC'
        },
        logout: jest.fn()
    }

    beforeEach (() => jest.clearAllMocks())

    
    test('nombre en el navbar', () => { 
        
       
       /*  render(<AuthContext.Provider value={contextValue}><MemoryRouter><NavBar></NavBar></MemoryRouter></AuthContext.Provider>)

        screen.debug(); */

     })




 })