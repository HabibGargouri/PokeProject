import banner from '../assets/banner.jpg'



function Banner() {
    return (
      <div className="banner">
        <img src={banner} alt="Banner Image" style={{width:"100%" , height:"200px", marginBottom:"20px"}} />
      </div>
    );
  }
  
  export default Banner;