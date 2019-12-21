import React, {useReducer } from 'react'
import { QuotesContext } from './quotesContext'
import {quotesReducer} from './quotesReducer'
import {axiosQuote} from '../axios/axiosQuote.js'
import { GET_QUOTES, REMOVE_QUOTE, GET_ONE_QUOTE } from './types'

const QuotesState = ({children}) => {
  const initialState = {
    quotesList : {},
    quote : null
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

  const getQuoteListCategory = async (props) => {
    const name = props.match.params.name;
    const response = await axiosQuote.get(`/quoteList.json?orderBy="category"&equalTo="${name}"`)
    dispatch({
      type : GET_QUOTES,
      payload : response.data
    })
  }

  const sendQuote = async (event,message,props) => {
    event.preventDefault();
    await axiosQuote.post('/quoteList.json',message);
    props.history.push('/')
  }

  const removeQuote = async (id) =>{
   await axiosQuote.delete(`/quoteList/${id}.json`)
    const quoteListModify = {...state.quotesList};
    delete quoteListModify[id];
    dispatch({
      type : REMOVE_QUOTE,
      payload : quoteListModify
    })
  }

  const getOneQuote = async (props) => {
    const id = props.match.params.id;

    const response = await axiosQuote.get(`/quoteList/${id}.json`)
    dispatch({
      type: GET_ONE_QUOTE,
      payload : response.data
    })
  }

  const editQoute = async (event,message,props) => {
    console.log('попал в рекатирование')
    event.preventDefault();

    const id = props.match.params.id;
    await axiosQuote.put(`/quoteList/${id}.json`,message);
    props.history.push('/');
  }


  return (
    <QuotesContext.Provider value={{
      getQuoteList,sendQuote, removeQuote, getOneQuote,getQuoteListCategory,editQoute,
      quotesList , quote
    }}>
      {children}
    </QuotesContext.Provider>
  )
}

export default QuotesState
