import React from 'react'
import ReactDOM from 'react-dom/client'
import HeroesApp from './HeroesApp'
import './styles.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import {BrowserRouter} from 'react-router-dom'
import 'animate.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <HeroesApp />
    </BrowserRouter>
  </React.StrictMode>
)