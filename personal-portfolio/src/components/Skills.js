
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>I have a strong skill set in designing and developing efficient and scalable software applications using a variety of programming languages.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <h5>Swift</h5>
                            </div>
                            <div className="item">
                                <h5>UiKit</h5>
                            </div>
                            <div className="item">
                                <h5>SwiftUI</h5>
                            </div>
                            <div className="item">
                              <h5>Docker</h5>
                            </div>
                            <div className="item">
                              <h5>Javascript</h5>
                            </div>
                            <div className="item">
                              <h5>Python</h5>
                            </div>
                            <div className="item">
                              <h5>SQL</h5>
                            </div>
                            <div className="item">
                              <h5>Express</h5>
                            </div>
                            <div className="item">
                              <h5>JWT</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
