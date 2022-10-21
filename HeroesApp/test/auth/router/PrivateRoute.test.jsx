import { render, screen } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { AuthContext } from "../../../src/auth/context/AuthContext"
import PrivateRoute from '../../../src/router/PrivateRoute'

describe('Pruebas en PrivateRoute', () => {

    test('debe de mostrar el children si esta autenticado', () => {


        Storage.prototype.setItem = jest.fn()

        const contextValue = {
            logged: true,
            user: {
                id: 'ABC',
                name: 'Santiago Lizarazo'
            }
        }

       /* render(<AuthContext.Provider value={contextValue}>

            <MemoryRouter> <PrivateRoute><h1>Ruta Privada</h1></PrivateRoute></MemoryRouter>

        </AuthContext.Provider>

        ); 

        expect(screen.getByText('Ruta Privada')).toBeTruthy() 
        expect(localStorage.setItem).toHaveBeenCalledWith(); */


    })


    test('debe de navegar si esta autenticado', () => {

        const contextValue = {
            logged: true,
            user: {
                name: 'Santiago Lizarazo',
                id: 'ABC'
            }
        }

         /* render(<AuthContext.Provider value={contextValue}>
 
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
 */


    })


})