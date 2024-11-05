import Image from "next/image";
import logo from "../../public/image/Screenshot (40).png";
import Card from "./components/Card";
import feature from "../../public/image/image1.png";
import img2 from "../../public/image/image2.png"
import img3 from "../../public/image/image3.png"

export default function Home() {
  return (
    <>
      <div className="hero-section">
        <div className="container">
          <div className="main">
            <div className="text">
              <h1 className="main-text">
                Hi, I am Saif Soomro, Creative Technologist
              </h1>
              <p className="text-para">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <button className="resume-btn">Download Resume</button>
            </div>
            <div>
              <div>
                <Image
                  src={logo}
                  alt="logo"
                  width={300}
                  height={300}
                  className="img"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="recent-post">
        <div className="container">
          <div className="main">
            <div className="heading">
              <h3> Recent Post</h3>
              <button className="view-all-btn">View All</button>
            </div>

            <div className="card-parent">
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>
      <div className="featured-section">
        <div className="container">
          <div className="main">
          <div className="main-heading">
            <h3 >Featured Works</h3>
          </div>
          <div className="card-parent">
          <div className="card">
            <Image src={feature} alt="image" width={245} height={180}></Image>
            <div className="card-content">
              <h2>Designing Dashboards</h2>
              <div className="badge-parent" >
                <div className="badge">
                  <p>2020</p>
                </div>
                <div>
                  <p>Dashboard</p>
                </div>
              </div>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
          <div className="card">
            <Image src={img2} alt="image" width={245} height={180}></Image>
            <div className="card-content">
              <h2>Designing Dashboards</h2>
              <div className="badge-parent" >
                <div className="badge">
                  <p>2020</p>
                </div>
                <div>
                  <p>Dashboard</p>
                </div>
              </div>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
          <div className="card">
            <Image src={img3} alt="image" width={245} height={180}></Image>
            <div className="card-content">
              <h2>Designing Dashboards</h2>
              <div className="badge-parent" >
                <div className="badge">
                  <p>2020</p>
                </div>
                <div>
                  <p>Dashboard</p>
                </div>
              </div>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
          </div>
         </div>

        </div>
      </div>
    </>
  );
}
