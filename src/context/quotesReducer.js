import { GET_QUOTES , REMOVE_QUOTE, GET_ONE_QUOTE } from './types'

const handlers = {
  [GET_QUOTES] : (state,{payload}) => ({...state,quotesList : payload}) ,
  [REMOVE_QUOTE] : (state,{payload}) => ({...state,quotesList : payload}),
  [GET_ONE_QUOTE] : (state,{payload}) => ({...state,quote : payload}),
  DEFAULT : state => state
}

export const quotesReducer = (state,action) =>{
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state,action)
}