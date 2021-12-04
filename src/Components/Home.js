import React, { Component } from "react";
import Logo from "../Images/logo.jpg";
import welcome from "../Images/welcome.jpg";

class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="header">
            {/* <span>
              CODE <span className="span-your">YOUR</span> FUTURE
            </span> */}
            <div className="welcome-image"></div>
            <img className="image" src={Logo} alt="logo" />
            <h2>ESOL Hakathon</h2>
          </div>
          {/* <div>
            <h3>Take Your ESOL Steps Forward</h3>
          </div> */}
          <div className="main">
            <div className="welcome-image">
              <img className="welcome-image" src={welcome} alt="welcome" />
            </div>
          </div>
        </div>
        <div className="home-footer">
          {/* <div className="home-links">
            <a
              className="icons-home"
              href="https://codeyourfuture.io/"
              target="_blank"
            >
              <i className="fa fa-home"></i>
            </a>
            <a
              className="icons-home"
              href="https://www.facebook.com/codeyourfuture.io"
              target="_blank"
            >
              <i className="fa fa-facebook-square"></i>
            </a>
            <a
              className="icons-home"
              href="https://twitter.com/CodeYourFuture_"
              target="_blank"
            >
              <i className="fa fa-twitter-square"></i>
            </a>
            <a
              className="icons-home"
              href="https://www.linkedin.com/company/codeyourfuture"
              target="_blank"
            >
              <i className="fa fa-linkedin-square"></i>
            </a>
            <a
              className="icons-home"
              href="mailto:contact@codeyourfuture.io"
              target="_blank"
            >
              <i className="fa fa-envelope" />
            </a>
          </div> */}
          {/* <p>Copyright &copy; 2021 Code Your Future</p> */}
        </div>
      </div>
    );
  }
}

// <div>
//       <div>
//         <div className="header">
//           {/* <span>
//             CODE <span className="span-your">YOUR</span> FUTURE
//           </span> */}
//           <div className="logo-image">
//             <img className="image" src={logo} alt="cyf_logo" />
//           </div>
//           <h2>Knowledge Checklist</h2>
//         </div>

export default Home;
