import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';


export const Navbar = () => {

    const { user, onLogoutUser } = useContext(AuthContext)



    const navigate = useNavigate();

    const onLogout = () => {
        onLogoutUser();
        navigate('/login', {
            replace: true
        })

    }


    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-4 d-flex justify-content-center">

            <Link
                className="navbar-brand "
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav text-center">

                    <NavLink
                        className={(isActive) => `nav-item nav-link ${!isActive ? 'active' : ''}`}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className={(isActive) => `nav-item nav-link ${!isActive ? 'active' : ''}`}
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink
                        className={(isActive) => `nav-item nav-link ${!isActive ? 'active' : ''}`}
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex  justify-content-md-end justify-content-center">
                <ul className="navbar-nav ml-auto">
                    <p className='text-white nav-item nav-link text-center m-0'>{user?.name}</p>
                    <NavLink
                        className={(isActive) => `d-flex justify-content-center nav-item nav-link ${!isActive ? 'active' : ''}`}
                        to="/login" onClick={onLogout}
                    >
                        Logout
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}