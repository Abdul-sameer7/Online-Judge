import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Desktop from "./desktop.jsx";
import Navbar from "./navbar.jsx";
import "./compcss/home.css";
import snippet from "../assets/snippet.png";
import Footer from "./footer.jsx";
const host = process.env.REACT_APP_BACKEND_URL;

const Home = () => {
  const navigate = useNavigate();
  // const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    // const verifyCookie = async () => {
    //   const { data } = await axios.post(`http://localhost:5000`, { token });
    //   const { status, user } = data;
    //   setUsername(user);
    //   console.log(status);
    //   return status
    //     ? toast(`Hello ${user}`, {
    //         position: "top-right",
    //       })
    //     : (localStorage.removeItem("token"), navigate("/"));
    // };
    // verifyCookie();
  }, [navigate]);

  return (
    <div className="home_page1">
      <Desktop username={username} />
      <Navbar />
      <div className="home_page10">
        <div className="exploresite">
          {/* <img 
            src={snippet} 
            alt="Snippet" 
            style={{ borderRadius: "30px", boxShadow: "4px 4px 24px 4px rgb(60, 241, 226)" }}
          /> */}
          <div style={{ width: "100%", height: "10%", paddingBottom: "41.8%", position: "relative",borderRadius: "30px", boxShadow: "4px 4px 24px 4px rgb(60, 241, 226)"  }}>
            <iframe 
              src="https://giphy.com/embed/78XCFBGOlS6keY1Bil" 
              width="100%" 
              height="100%" 
              style={{ position: "absolute" }} 
              frameBorder="0" 
              className="giphy-embed" 
              allowFullScreen
            ></iframe>
          </div>
          <p>
            <a href="https://giphy.com/gifs/PizzaNinjas-programmer-pizza-ninjas-pizzaninjas-78XCFBGOlS6keY1Bil">
            </a>
          </p>
          <div className="exploredes">
            <h1>CodeWar</h1>
            <br />
            <h2>
              Presenting high-quality challenges designed to enhance your programming skills.<br /> You can now submit your solutions for evaluation.
              <br />Tackle more challenges to climb the leaderboard and showcase your expertise.
            </h2>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Home;
