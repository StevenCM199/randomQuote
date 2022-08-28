import "./styles.css";
import { useState } from "react";
import colors from "./colors.json";
import quotes from './quotes.json';

function App() {

  var colorArray = Object.values(colors); 


  let randomIndex = Math.floor(Math.random() * quotes.length);
  let randomColor = Math.floor(Math.random() * colorArray.length);

  const [index, setIndex] = useState(randomIndex); 
  const [color, setColor] = useState(randomColor); 


  document.body.style = `background: ${colorArray[randomColor]}`;
  

  function changeIndex() {
    setIndex(Math.floor(Math.random() * quotes.length));
    setColor(Math.floor(Math.random() * colorArray.length));
  }


  return (
    <div className="App">
      <div className="card" style={{color: colorArray[randomColor]}}>
        <div className="quote-content">
          <h1 className="quotation-mark"> <i className="fa-solid fa-quote-left"></i>
          </h1>
          <p className="quote-text">
            {quotes[randomIndex].quote}
          </p>
        </div>
        
        <p className="author-text">
          {'-'}{quotes[randomIndex].author}
        </p>

        <div className="button-container">
          <button onClick={changeIndex}> New Quote</button>

        </div>
      </div>
      
    </div>
  );
}

export default App;

