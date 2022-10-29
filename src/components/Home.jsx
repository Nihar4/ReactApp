import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillYoutube,
  AiFillInstagram,
  AiFillAmazonCircle,
} from "react-icons/ai";
const Home = () => {
  return (
    <div className="container">
      <div className="home" id="home">
        <main>
          <h1>Techystar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>WHO WE ARE?</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ipsam
            harum doloremque laboriosam amet quia repudiandae, obcaecati
            molestias deserunt dolorum expedita eum dicta dolore deleniti libero
            cupiditate hic ex, voluptatem totam corrupti. Natus blanditiis hic
            debitis pariatur non quaerat quibusdam. A labore sit magni non?
            Reprehenderit blanditiis iusto quos voluptatibus.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>BRANDS</h1>
          <article>
            <div style={{ animationDelay: "0.2s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{ animationDelay: "0.5s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{ animationDelay: "0.7s" }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div style={{ animationDelay: "0.9s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Home;
