import "./styles.css";
import { useState } from "react";
import colors from "./colors.json";
import quotes from './quotes.json';
import QuoteBox from "../components/QuoteBox";

function App() {

  var colorArray = Object.values(colors); 

  let randomIndex = Math.floor(Math.random() * quotes.length);
  let randomColor = Math.floor(Math.random() * colorArray.length);

  const [index, setIndex] = useState(randomIndex); 
  const [bgcolor, setColor] = useState(randomColor); 

  document.body.style = `background: ${colorArray[randomColor]}`;
  
  const changeIndex = () => {
    setIndex(Math.floor(Math.random() * quotes.length));
    setColor(Math.floor(Math.random() * colorArray.length));
    console.log(colorArray[randomColor]);
  }

  return (
    <div className="App">
      <QuoteBox bgcolor={colorArray[randomColor]} quotes={quotes} quoteIndex={index} changeIndex={changeIndex}> 
      </QuoteBox>
    </div>
  );
}

export default App;

