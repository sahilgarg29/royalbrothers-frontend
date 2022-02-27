import React from "react"
import "./slider.css"
const colors = [{

    image:"https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/slide-one-8c7f76cbbc58a89e95e8fcc1ab03d3d4cf12ef680989755fcf01f3a725d5d775.jpg",
     head:"We're socially celebrated",
     para:"Our customer centric approach has got amazing reviews. Be it in any platform, you will see many users recommending our service "
},{
    image:"https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/slide-two-2d63ed83b9f2b4003344ac868bb2a42d29efe841bb2c5894ac53bd6af85adb86.jpg",
    head:"Ready to serve you in 40+ cites",
    para:"Think of a city & we are mostaly there . The next time you plan on exploring a city, know that you are mean of transport is sorted with royal brothers. #BhaiHaiNa"
},
{
    image:"https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/slide-three-a8787ad27e9ea8ab39d164f233b0995c76d59c4a517c0313e11a4122d6309038.jpg",
    head:"Bikes Maintained so good , you will feel it is brand new",
    para:"We obsess on giving you the best possible experience. This is not only with well surviced bikes but also with a 24/7 support team available just a call away."
}
];
const delay = 2500;
 const Slider=()=>{
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((e, index) => (
           
          <div
            className="slide"
            key={index} style={{background:  `url(${e.image}) center` }}>
                 
                <div className="slideDiv">
                <h2>{e.head}</h2>
                <p>{e.para}</p>
                </div>
             
         
          </div>
        ))}
      </div>

      <div className="slideshowDots">

        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
      
        
    </div>
  );
}
export default Slider;