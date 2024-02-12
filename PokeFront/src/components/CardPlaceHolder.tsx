import  asset  from "../assets/PokeBall.png";

function CardPlaceHolder( {item } ) {

    const cards = Array.from({ length: item }, (_, index) => index);
    
  return (
    <div className="container text-center justify-content-center">
      <div className="row ">
        {cards.map((index) => (
            <div className="col " key={index}>
             <div className="card text-bg-light mb-3" aria-hidden="true" style={{ width: "18rem" }}>
             <img src={asset} className="card-img-top" alt="..." />
             <div className="card-body">
               <h5 className="card-title placeholder-glow">
                 <span className="placeholder col-6"></span>
               </h5>
               <p className="card-text placeholder-glow">
                 <span className="placeholder col-7"></span>
                 <span className="placeholder col-4"></span>
                 <span className="placeholder col-4"></span>
                 <span className="placeholder col-6"></span>
                 <span className="placeholder col-8"></span>
               </p>
               <a
                 className="btn btn-primary disabled placeholder col-6"
                 aria-disabled="true"
               ></a>
             </div>
             </div>
           </div>
        ))}
      </div>
    </div>
  );
}

export default CardPlaceHolder;
