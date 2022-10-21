import React, { useMemo } from 'react'
import { useParams, Navigate,useNavigate } from 'react-router-dom'
import { getHeroById } from '../helpers/getHeroById';


const Hero = () => {

  const { heroId } = useParams();


  const hero = useMemo (() => getHeroById(heroId), [heroId])


  const navigate = useNavigate()

  if (!hero) {
    return <Navigate to='/marvel'></Navigate>
  }

  const onReturn = () => {
    if(hero.publisher === "DC Comics"){
      navigate('/dc',{
        replace: true
    })

    }else{
      navigate('/marvel',{
        replace: true
    })

    }
  }


  return (
    <>
      <div className='row mt-5'>
        <div className="col-4">

          <img src={`/assets/heroes/${hero.id}.jpg`} className='img-thumbnail animate__animated animate__fadeInLeft' alt={hero.superhero} />

        </div>

        <div className="col-8"><h3>{hero.superhero}</h3>
          <ul className='list-group list-group-flush'>


            <li className='list-group-item'>

              <b>Alter ego: </b> {hero.alter_ego}

            </li>


            <li className='list-group-item'>

              <b>
                Publisher: </b> {hero.publisher}

            </li>


            <li className='list-group-item'>

              <b>First Appearance: </b> {hero.first_appearance}

            </li>

          </ul>

          <h5 className='mt-3'>Character</h5>
          <p>{hero.characters}</p>

          <button onClick={onReturn} className='btn btn-outline-primary'>Regresar</button>
        </div>

      </div>

    </>


  )
}

export default Hero