//
import { Pokemon } from "../classes";
import placeholder from "../assets/PokeBall.png"


function PokemonCard( {Pokemon} : {Pokemon : Pokemon}) {
  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${Pokemon.id}.png`;
  return (
    <>
      <div className="card text-bg-primary mb-3" style={{ width: "18rem" }}>
        <img src={image ? image : placeholder} className="card-img-top" alt={"..."} style={{ height: "18rem" }} />
        <div className="card-body ">
          <h5 className="card-title ">{Pokemon.name}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Height : {Pokemon.height}</li>
          <li className="list-group-item">Weight :{Pokemon.weight}</li>
          <li className="list-group-item">
            <div className="row justify-content-evenly"> 
            {Pokemon.types.map((type: string) => (
                <p className="col-3 badge rounded-pill text-bg-dark" key={type}>{type}</p>
              ))}
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default PokemonCard;
