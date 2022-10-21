import { Route, Routes } from 'react-router-dom'
import Login from '../auth/pages/Login'
import HeroesRoutes from '../heroes/routes/HeroesRoutes'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

const AppRouter = () => {
    return (
        <>

            <Routes>


                <Route path='login' element={<PublicRoute><Login></Login></PublicRoute>}></Route>


                <Route path='/*' element={<PrivateRoute><HeroesRoutes></HeroesRoutes></PrivateRoute>}> </Route>


            </Routes>

        </>
    )
}

export default AppRouter