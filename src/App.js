import React from "react";
import "./App.css";
import MainPage from "./containers/MainPage/MainPage";
import Layout from "./hoc/Layout";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import CreateQuote from "./containers/CreateQuote/CreateQuote";
import QuotesState from "./context/quotesState";

function App() {
  return (
    <QuotesState>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/newPost" component={CreateQuote} />
            <Route path="/edit/:id" component={CreateQuote} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </QuotesState>
  );
}

export default App;
