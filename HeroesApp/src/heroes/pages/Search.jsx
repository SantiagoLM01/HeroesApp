import React, { useState } from 'react'
import HeroCard from '../components/HeroCard'
import queryString from 'query-string'
import { useForm } from '../hooks/useForm'
import { useNavigate, useLocation } from 'react-router-dom'
import { getHeroesByName } from '../helpers/getHeroesByName'


const Search = () => {

  const [buscado, setBuscado] = useState(false)
  const navigate = useNavigate();
  const location = useLocation();


  const { q = '' } = queryString.parse(location.search)

  const heroes = getHeroesByName(q)




  const { onInputChange, searchText } = useForm({
    searchText: q
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();

    navigate(`?q=${searchText.toLowerCase().trim()}`)



  }


  return (
    <>

      <h1 className='mt-4'>Search Hero</h1>

      <div className="row">
        <div className="col-5"> <h4>Searching</h4>

          <form onSubmit={onSearchSubmit}>

            <input type="text" placeholder='Search a Hero' className='form-control' name='searchText' autoComplete='off' value={searchText} onChange={onInputChange} />


            <button className='btn btn-outline-primary mt-2'>Search</button>
          </form>

        </div>

        <div className="col-7">

          <h4>Results</h4>

          {(q === '') ? <div className='alert alert-primary'> Search a Hero</div> : (heroes.length === 0) && <div className='alert alert-danger'> No Hero Found With <b>{q}</b></div>
          }


          {heroes.map(hero => (
            <div key={hero.id} className='mt-3' >
              <HeroCard key={hero.id} hero={hero}></HeroCard>
            </div>
          ))}


        </div>
      </div>
    </>
  )
}

export default Search