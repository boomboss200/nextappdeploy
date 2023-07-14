const About = () => {
  return (
    <section
      id="about"
      data-nav-tooltip="About"
      className="pp-section pp-scrollable section counter"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 m-15px-tb">
            <div className="about-me">
              <div className="img">
                <div className="img-in">
                  <img src="static/img/about-me.png" title="" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="about-info">
              <div className="title">
                <h3>PetsMall</h3>
              </div>
              <div className="about-text">
                <h3>
                 MERN Stack App for Pets Accessories
                </h3>
                <p>
                I am deeply passionate about software development and have an insatiable curiosity to explore and learn emerging technologies. 
                My primary focus lies in React Native and React, through which I create visually captivating and user-friendly mobile applications and websites.
                I have dedicated countless hours to honing my skills in SwiftUI, which has empowered me to build robust and scalable native IOS applications.
                {" "}
                <br/>
                {"\n"}
                Beyond my expertise in React and JavaScript, I have also gained valuable experience working with various other programming languages such as Python, and C/C++. 
                This diverse skill set has endowed me with a distinctive problem-solving perspective and has enabled me to tackle an extensive range of projects.
                </p>
                <div className="btn-bar">
                  <a className="px-btn px-btn-theme" href="https://github.com/boomboss200/PetsMall-MERN-Project">
                    <span>Check Github <i className="fab fa-github" /></span>
                  </a>
                  <a className="px-btn px-btn-theme" href="#">
                    <span>View Live Demo Of Website <i className="fa-computer"/> </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="separated" />
        </div>
    </section>
  );
};
export default About;
