import dynamic from "next/dynamic";
import About from "../src/components/About";
import Blog from "../src/components/Blog";
import Contact from "../src/components/Contact";
import Services from "../src/components/Services";
import TypingAnimation from "../src/components/TypingAnimation";
import Layout from "../src/layout/Layout";
import axios from 'axios'
import fileDownload from 'js-file-download'
const Portfolio = dynamic(() => import("../src/components/Portfolio"), {
  ssr: false,
});
const Index = () => {
   const handleDownload = (url, filename) => {
    axios.get(url, {
      responseType: 'blob',
    })
    .then((res) => {
      fileDownload(res.data, filename)
    })
  }
  return (
    <Layout>
      <section
        id="home"
        data-nav-tooltip="Home"
        className="pp-section pp-scrollable"
      >
        <div className="home-banner">
          <div className="container">
            <div className="row full-screen align-items-center">
              <div className="col-lg-6">
                <div className="type-box">
                  <h6>Hello, I am</h6>
                  <h1 className="font-alt">Behzad Khadim</h1>
                  <p className="lead">
                  <TypingAnimation /> Developer
                  </p>
                  <p className="desc">
                  Motivated computer science student seeks entry-level position to apply theoretical knowledge and 
                  gain practical experience. Strong academic foundation, passion for technology, and 
                  solid understanding of computer science principles. 
                  Eager to contribute to a dynamic organization, expand skills, and grow expertise.
                  </p>
                  <div className="btn-bar">
                  {/* <button onClick={() => {handleDownload('', 'test-download.jpg')
                    }}>Download Image</button> */}
                   <a className="px-btn px-btn-theme" href="gifs/MyResume1page.pdf" download="BehzadKhadim.pdf">
                      Donwload CV
                    </a> 
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="hb-img">
                <iframe src="https://gifer.com/embed/3rCC" width="480" height="675.200" frameBorder="0" allowFullScreen></iframe><p><a href="https://gifer.com">via GIFER</a></p>                
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Home */}
      {/* about us */}
      <About />
      {/* End about us */}
      {/* Services */}
       {/* <Services /> */}
      {/* End Services */}
      {/* Portfolio */}
      <Portfolio />
      {/* End Portfolio */}
      {/* Blog */}
      <Blog />
      {/* End Blog */}
      {/* Contact us */}
      <Contact />
    </Layout>
  );
};
export default Index;
