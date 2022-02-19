import React from "react";
import Logo from "../Images/logo.webp";
import welcome from "../Images/welcome.jpg";
// import Calst from "../Images/Calst.png";
// import ESOL from "../Images/ESOL.png";
// import CalstLogo from "../Images/CalstLogo.png";
import Carousel from "../Components/Carousel";
// import Footer from "../Components/Footer";

const Home = () => {
  // const [logo, setLogo] = useState(Logo);
  // const [calst, setCalst] = useState("");
  // const [esol, setEsol] = useState(ESOL);
  // console.log(data);
  // const data = [Calst, ESOL];
  // console.log(data);
  // const answer = "";
  // const handleClick = (event) => {
  //   event.preventDefault();
  //   setCalst("visit Calst https://www.ntnu.edu/isl/calst");
  // };
  return (
    <div>
      <div>
        <div className="header">
          <div className="welcome-image"></div>
          <img className="image" src={Logo} alt="logo" />
          <h2>firstStep</h2>
        </div>

        <div className="main">
          <div className="welcome-image">
            <img
              className="welcome-image"
              height={700}
              src={welcome}
              alt="welcome"
            />
          </div>
          <div>
            {/* <h1>{calst}</h1>{" "} */}
            {/* <img
              className="image"
              src={data[0]}
              alt="logo"
              onClick={handleClick}
            /> */}
          </div>
          <div>
            <Carousel />
          </div>
          {/* 
          <div>
            {" "}
            <img className="image" src={data[0]} alt="logo" />
          </div> */}
        </div>
      </div>
      <div className="home-footer">
        <p className="Footer">Copyright &copy; 2021 easyRights</p>
      </div>
    </div>
  );
};

export default Home;
