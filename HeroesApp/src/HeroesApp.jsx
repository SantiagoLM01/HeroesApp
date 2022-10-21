import AppRouter from "./router/AppRouter"
import { Navbar } from "./heroes/components/NavBar"
import AuthProvider from "./auth/context/AuthProvider"

const HeroesApp = () => {
  return (
    <>
      <AuthProvider>
        <AppRouter></AppRouter>
      </AuthProvider>
    </>
  )
}

export default HeroesApp