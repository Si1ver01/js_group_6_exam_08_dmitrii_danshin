import React, { useContext, useEffect } from "react";
import "./CreateQuote.scss";
import Form from "../../components/Form/Form";
import { QuotesContext } from "../../context/quotesContext";

const CreateQuote = props => {
  console.log("Create quote", props);
  const { getOneQuote, quote } = useContext(QuotesContext);

  useEffect(() => {
    if (props.match.params.id) {
      getOneQuote(props);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="CreateQuote">
      <div className="container">
        {props.match.params.id ? (
          quote && <Form {...props} />
        ) : (
          <Form {...props} />
        )}
        {/* {quote &&  <Form {...props}/>} */}
      </div>
    </div>
  );
};

export default CreateQuote;
