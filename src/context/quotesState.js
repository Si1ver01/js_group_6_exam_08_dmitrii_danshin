import React, { Fragment, useReducer } from 'react'
import { QuotesContext } from './quotesContext'
import {quotesReducer} from './quotesReducer'
import {axiosQuote} from '../axios/axiosQuote.js'
import { GET_QUOTES, REMOVE_QUOTE, GET_ONE_QUOTE } from './types'

const QuotesState = ({children}) => {
  const initialState = {
    quotesList : {},
    quote : {}
  }

  const [state,dispatch] = useReducer(quotesReducer,initialState);
  const {quotesList , quote} = state;

  const getQuoteList = async () => {
    const response = await axiosQuote.get('/quoteList.json');
    dispatch({
      type : GET_QUOTES,
      payload : response.data
    })
  }

  const sendQuote = async (event,message,props) => {
    event.preventDefault();
    const response = await axiosQuote.post('/quoteList.json',message);
    props.history.push('/')
  }

  const removeQuote = async (id) =>{
    const response = await axiosQuote.delete(`/quoteList/${id}.json`)
    const quoteListModify = {...state.quotesList};
    delete quoteListModify[id];
    dispatch({
      type : REMOVE_QUOTE,
      payload : quoteListModify
    })
  }

  const getOneQuote = (props) => {
    console.log("Пытаюсь получить одну цитату")
    const id = props.match.params.id;
    // const response = axiosQuote.get(`/quoteList/${id}`)
    dispatch({
      type: GET_ONE_QUOTE,
      payload : {...state.quotesList[id]}
    })
  }

  const editQoute = async (event,message,props) => {
    event.preventDefault();
    const id = props.match.params.id;
    const response = await axiosQuote.put(`/quoteList/${id}.json`,message);
  }


  return (
    <QuotesContext.Provider value={{
      getQuoteList,sendQuote, removeQuote, getOneQuote,
      quotesList , quote
    }}>
      {children}
    </QuotesContext.Provider>
  )
}

export default QuotesState
