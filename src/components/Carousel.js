import Carousel from "react-bootstrap/Carousel";
import "../CSS/Carousel.css";

function CarouselComponent() {
  
  return (

      <Carousel>
        <Carousel.Item>
          <img width={910}
            src="https://img.freepik.com/free-photo/mountain-fire_460848-6874.jpg?w=1380&t=st=1674760614~exp=1674761214~hmac=c630125896d4dab4d4a7231baba79dc686535b600b3477f4535b1d2983d8ab42"
            alt="First slide"
          />
       
        </Carousel.Item>
        
        <Carousel.Item >
          <img 
            className="img-responsive d-block "
            src="https://c1.wallpaperflare.com/preview/553/386/425/fire-burning-house-flame.jpg"
            alt="Second slide"
          />
   
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-responsive d-block "
            src="https://c1.wallpaperflare.com/preview/211/577/273/fire-delete-brand-fire-fighting.jpg"
            alt="Third slide"
          />
      
   
        </Carousel.Item>
      </Carousel>

  );
}

export default CarouselComponent;
