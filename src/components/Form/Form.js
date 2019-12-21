import React, { useState, useEffect, useContext } from "react";
import "./Form.scss";
import Input from "../Ui/Input/Input.jsx";
import Select from "../Ui/Select/Select";
import Button from "../Ui/Button/Button.jsx";
import { CATEGORY_LIST } from "../../const/categoryList";
import { QuotesContext } from "../../context/quotesContext";

const Form = (props) => {

  const {getOneQuote ,quote ,sendQuote,} = useContext(QuotesContext);
  
  const initialState = {
    author: "",
    quote: "",
    category: "Star Wars"
  };

  useEffect(() => {
    if(props.edit){
      getOneQuote(props);
    }
},[])

  const [state, dispatch] = useState(initialState);
  if(Object.keys(quote).length){
    dispatch({...state,author : quote.author, category : quote.category , category : quote.category})
  }

  return (
    <div className="Form">
      <h2>Send quote</h2>
      <form onSubmit={(event) => sendQuote(event,state,props)}>
        <Input
          label="Автор цитаты"
          required={true}
          handler={event => dispatch({ ...state, author: event.target.value })}
          value={state.author}
        />
        <Input label="Цитата" required={true} 
          handler={event => dispatch({ ...state, quote: event.target.value })}
          value={state.quote}
          />
        <Select list={CATEGORY_LIST} required={true} 
          handler={event => dispatch({ ...state, category: event.target.value })}
          value={state.category}
        />
        <div className="buttonBlock">
          <Button type="submit"> Send </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
