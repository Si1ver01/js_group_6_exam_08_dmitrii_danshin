import React from "react";
import "./QuotesList.scss";
import QuotesItem from "./QuotesItem/QuotesItem";

const QuotesList = ({list}) => {
  const formatList = Object.keys(list).map(elem => ({...list[elem],id:elem}));
  return (
    <div className="Quotes-list">
      <h3>Quotes list: </h3>
      <ul>
        {formatList.map(elem => <QuotesItem key={elem.id} quote={elem}/>)}        
      </ul>
    </div>
  );
};

export default QuotesList;
