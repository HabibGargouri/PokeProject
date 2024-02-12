import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useGetPokemon } from "../hooks";
import CardPlaceHolder from "../components/CardPlaceHolder";

//
function PokePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading , isError } = useGetPokemon(parseInt(id!));
  

  const handleBackClick = () => {
    navigate(-1); // Navigate back one step in history
  };

  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  if (isLoading) {
    return (
      <>
        <div className="container text-center">
          <CardPlaceHolder item={1} />
        </div>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <div className="container text-center">
          <Navigate to={"/404"}/>
        </div>
      </>
    );
  }


  return (
    <>
      <button
        type="button"
        className="btn btn-secondary btn-sm back-button"
        style={{ marginLeft: "40px", marginTop: "40px" }}
        onClick={handleBackClick}
      >
        Go Back
        <i className="bi bi-arrow-left ms-2"></i>
      </button>
      <div className="d-flex justify-content-center">
        <div className="card  " style={{ width: "50%" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={image}
                className="img-fluid"
                style={{ width: "350px" }}
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{data?.name}</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <strong>ID:</strong> {data?.id}
                  </li>
                  <li className="list-group-item">
                    <strong>Height:</strong> {data?.height}
                  </li>
                  <li className="list-group-item">
                    <strong>Weight:</strong> {data?.weight}
                  </li>
                  <li className="list-group-item">
                    <strong>Base Experience:</strong> {data?.baseExperience}
                  </li>
                </ul>
                <ul className="list-group list-group-flush">
                  {data?.stats.map((stat, index) => (
                    <li key={index}>
                      {stat.name}: {stat.baseStat}
                    </li>
                  ))}
                </ul>
                <div className="card-text">
                  {data?.types.map((type: string) => (
                    <p
                      className="col-2 badge rounded-pill text-bg-dark"
                      key={type}
                    >
                      {type}
                    </p>
                  ))}
                </div>
                <div className=" mb-3">
                  <strong>Abilities:</strong>
                  <ul className="list-unstyled">
                    {data?.abilities.map((ability, index) => (
                      <li key={index}>{ability}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PokePage;
