import React from 'react';

const QuoteBox = ({bgcolor, quotes, changeIndex, quoteIndex}) => {
  
  return (
    <div className="quoteBox" style={{color: bgcolor}}>
        <div className="quote-content">
          <h1 className="quotation-mark"> <i className="fa-solid fa-quote-left"></i>
          </h1>
          <p className="quote-text" style={{color: bgcolor}}>
            {quotes[quoteIndex].quote}
          </p>
        </div>
        
        <p className="author-text" style={{color: bgcolor}}>
          {'-'}{quotes[quoteIndex].author}
        </p>
      <div className="button-container">
        <button style={{background: bgcolor}} onClick={changeIndex}> <i className="fa-solid fa-arrow-right-long"></i> </button>
      </div>
    </div>
  );
};

export default QuoteBox;