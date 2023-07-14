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
                <h3>About me.</h3>
              </div>
              <div className="about-text">
                <h3>
                  {`I'm`} a Final Year Computer Science Undergraduate Student
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
                  <a className="px-btn px-btn-theme" href="#">
                    <span>My Resume</span>
                  </a>
                  <a className="px-btn px-btn-theme" href="#">
                    <span>Projects Portfolio</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="separated" />
        <div className="title">
          <h3>Education &amp; Skills</h3>
        </div>
        <div className="row">
          <div className="col-lg-4 m-15px-tb">
            <ul className="aducation-box">
              <li>
                <span>2024</span>
                <h5>BS Computer Science</h5>
                <p>COMSATS University Islamabad, Lahore Campus</p>
              </li>
              <li>
                <span>2019</span>
                <h6>Intermediate (Pre-Engineering)</h6>
                <p>Forman Christian College, Lahore</p>
                
              </li>
              <li>
                <span>2017</span>
                <h6>Middle School &amp; Matriculation</h6>
                <p>Sadiq Public School, Bahawalpur</p>
              </li>
              <li>
                <span>2012</span>
                <h6>Junior School</h6>
                <p>Aitchison College, Lahore</p>
              </li>
            </ul>
          </div>
          <div className="col-lg-7 ml-auto m-15px-tb">
            <div className="skills-box">
              <h3>Certifications &amp; Courses</h3>
              <li>
                <span>2022</span>
                <h5>100 Days of SwiftUI By Paul Hudson</h5>
                <p><a href="https://www.hackingwithswift.com/100/swiftui ">https://www.hackingwithswift.com/100/swiftui</a></p>
                <p>
                Swift UI as a computer science student provides valuable skills in modern UI development,
                 mobile app development, cross-platform development, integration with Swift, industry relevance,
                  staying up-to-date with Apple technologies, enhanced problem-solving and design skills, 
                  and access to a vibrant development community. These skills can significantly benefit
                   students pursuing careers in iOS and macOS app development, mobile computing, user 
                   interface design, and software engineering.
              </p>
              </li>
              <h3>Technical Skills</h3>
              <div className="skill-lt">
                <h6>Digital Image Processing</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "88%" }}>
                    <span data-toggle="tooltip" title="92%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>Machine Learning Models and Algorithms</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "85%" }}>
                    <span data-toggle="tooltip" title="72%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>Web and App Development</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "86%" }}>
                    <span data-toggle="tooltip" title="86%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>UI/UX</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "88%" }}>
                    <span data-toggle="tooltip" title="88%" />
                  </div>
                </div>
              </div>
              {/* /skill */}
            </div>
          </div>
        </div>
        <div className="separated" />
        <div className="title">
          <h3>Experience.</h3>
        </div>
        <div className="resume-box">
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="static/img/a1.png" title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Front-end Developer</h6>
                  <label>WeLab | Remote | Jan 2019 - Present</label>
                  <div className="rb-time">Full Time</div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="static/img/a2.png" title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Front-end Developer</h6>
                  <label>WeLab | Remote | Jan 2019 - Present</label>
                  <div className="rb-time">Full Time</div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <img src="static/img/a3.png" title="" alt="" />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Front-end Developer</h6>
                  <label>WeLab | Remote | Jan 2019 - Present</label>
                  <div className="rb-time">Full Time</div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
