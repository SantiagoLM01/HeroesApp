import { render, screen } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { AuthContext } from "../../../src/auth/context/AuthContext"
import PublicRoute from '../../../src/router/PublicRoute'

describe('Pruebas en PublicRoute', () => {

    test('debe de mostrar el children si no esta autenticado', () => {

        const contextValue = {
            logged: false
        }

        render(<AuthContext.Provider value={contextValue}><PublicRoute><h1>Ruta Publica</h1></PublicRoute></AuthContext.Provider>)

        expect(screen.getAllByText('Ruta Publica')).toBeTruthy()

    })


    test('debe de navegar si esta autenticado', () => {

        const contextValue = {
            logged: true,
            user: {
                name: 'Santiago Lizarazo',
                id: 'ABC'
            }
        }

        render(<AuthContext.Provider value={contextValue}>

            <MemoryRouter initialEntries={['/login']}>

                <Routes>
                    <Route path="login" element={
                        <PublicRoute><h1>Ruta Publica</h1></PublicRoute>
                    }></Route>

                    <Route path="marvel" element={<h1>Pagina Marvel</h1>}></Route>


                </Routes>




            </MemoryRouter>


        </AuthContext.Provider>)


        screen.debug()



    })


})