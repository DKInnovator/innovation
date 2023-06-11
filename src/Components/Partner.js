import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";


export default function App() {
  return (
    <>
       <h5 className="text-center container mt-4">Parterning With Top Colleges And Companies</h5>
    <Splide className="container mt-5  bg-light p-4"
      options={{
        type: "loop",
        gap: "10px",
        drag: "free",
        arrows: false,
        pagination: false,
        perPage: 4,
        breakpoints: {
           900:{
            perPage: 3,
           },
            640: {
              perPage: 2,
            },
            
            768: {
              perPage: 2,
              },
          },
        autoScroll: {
          pauseOnHover: false,
          pauseOnFocus: false,
          rewind: false,
          speed: 1
        }
      }}
      extensions={{ AutoScroll }}  >
    
      <SplideSlide >
        <img src="google.png" alt="images 1"  style={{boxShadow: "2px 6px 8px 0 rgba(22, 22, 26, 0.18)",width:"150px"}} />
      </SplideSlide>
      <SplideSlide style={{marginLeft:"10px"}} >
        <img src="facebook.png" alt="images 2"  style={{boxShadow: "2px 6px 8px 0 rgba(22, 22, 26, 0.18)",width:"150px"}} />
      </SplideSlide>
      <SplideSlide  >
        <img src="ibm.png" alt="images 2"  style={{boxShadow: "2px 6px 8px 0 rgba(22, 22, 26, 0.18)",width:"150px"}}  />
      </SplideSlide>
      <SplideSlide  >
        <img src="intel.png" alt="images 2"  style={{boxShadow: "2px 6px 8px 0 rgba(22, 22, 26, 0.18)",width:"150px"}} />
      </SplideSlide>
      <SplideSlide  >
        <img src="amazon.png" alt="images 2" style={{boxShadow: "2px 6px 8px 0 rgba(22, 22, 26, 0.18)",width:"150px"}}  />
      </SplideSlide>
      <SplideSlide  >
        <img src="cisco.png" alt="images 2"  style={{boxShadow: "2px 6px 8px 0 rgba(22, 22, 26, 0.18)",width:"150px"}}  />
      </SplideSlide>
    </Splide>
    
    <Splide className="container mb-4 bg-light p-4"
      options={{
        type: "loop",
        gap: "10px",
        drag: "free",
        arrows: false,
        pagination: false,
        perPage: 4,
        breakpoints: {
          900:{
            perPage: 3,
           },
            640: {
              perPage: 2,
            },
            768: {
              perPage: 2,
              },
          },
        autoScroll: {
          pauseOnHover: false,
          pauseOnFocus: false,
          rewind: false,
          speed: -1
        }
      }}
      extensions={{ AutoScroll }}  >
    
      <SplideSlide >
        <img src="google.png" alt="images 1"  style={{boxShadow: "2px 6px 8px 0 rgba(22, 22, 26, 0.18)",width:"150px"}} />
      </SplideSlide>
      <SplideSlide style={{marginLeft:"10px"}} >
        <img src="facebook.png" alt="images 2"  style={{boxShadow: "2px 6px 8px 0 rgba(22, 22, 26, 0.18)",width:"150px"}} />
      </SplideSlide>
      <SplideSlide  >
        <img src="ibm.png" alt="images 2"  style={{boxShadow: "2px 6px 8px 0 rgba(22, 22, 26, 0.18)",width:"150px"}}  />
      </SplideSlide>
      <SplideSlide  >
        <img src="intel.png" alt="images 2"  style={{boxShadow: "2px 6px 8px 0 rgba(22, 22, 26, 0.18)",width:"150px"}} />
      </SplideSlide>
      <SplideSlide  >
        <img src="amazon.png" alt="images 2" style={{boxShadow: "2px 6px 8px 0 rgba(22, 22, 26, 0.18)",width:"150px"}}  />
      </SplideSlide>
      <SplideSlide  >
        <img src="cisco.png" alt="images 2"  style={{boxShadow: "2px 6px 8px 0 rgba(22, 22, 26, 0.18)",width:"150px"}}  />
      </SplideSlide>
    </Splide>
    </>
  );
}
