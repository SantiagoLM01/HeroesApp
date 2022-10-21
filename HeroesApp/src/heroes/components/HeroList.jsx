import { useMemo } from "react"
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher"
import HeroCard from "./HeroCard"


const HeroList = ({ publisher }) => {


    const heroes = useMemo(() => getHeroesByPublisher(publisher)) 

    return (
        <>
            <div className="row row-cols-1 row-cols-md-3 g-3 mb-5">
                {heroes.map(hero => (
                    <HeroCard key={hero.id} hero={hero}></HeroCard>
                ))}
            </div>
        </>
    )
}

export default HeroList                   
/* row-cols-sm-1 row-cols-md-3 g-3 mb-5 */