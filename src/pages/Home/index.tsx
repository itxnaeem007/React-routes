import "./styles.css";
import logo from "../../assets/react.svg";
import { useRef } from "react";

const Home = () => {
  const inputRef = useRef(null);

  const getRefValue = () => {
    console.log(inputRef?.current)
    
    console.log(inputRef?.current?.value);
  };
   const array = [1, 2, 3, 4, 5];


  return (
    <div id="home">
      <div id="home-content">
        <div className="page-title">
          <img src={logo} alt="" />
          <h2>React is awesome! {8+8} </h2>
          <ul>

          {
            array.map((elem, i) => <li key={i} >{elem}</li>)
          }
          </ul>

          <div>
            <input type="text" ref={inputRef} />
            <button  onClick={getRefValue}>Get Value</button>
          </div>
        </div>
        <br />
        <p>Welcome!</p>
      </div>
    </div>
  );
};

export default Home;
