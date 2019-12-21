import React, { useContext } from "react";
import "./QuotesItem.scss";
import { Link } from "react-router-dom";
import { QuotesContext } from "../../../context/quotesContext";

const QuotesItem = ({ quote }) => {
  const {removeQuote} = useContext(QuotesContext)
  return (
    <li className="QuotesItem">
      <blockquote>
        <p>{quote.quote}</p>
        <footer>
          — <cite>{quote.author}</cite>
        </footer>
        <span>{quote.category}</span>
        <div className='button-block'>
          <button onClick={() => removeQuote(quote.id)}>Delete</button>
          <Link to={'/edit/' + quote.id}>Edit</Link>
        </div>
      </blockquote>
    </li>
  );
};

export default QuotesItem;
