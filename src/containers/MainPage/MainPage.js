import React, { useContext, useEffect } from 'react'
import './MainPage.scss'
import QuotesList from '../../components/QuotesList/QuotesList'
import Category from '../../components/Category/Category'
import { QuotesContext } from '../../context/quotesContext'

const MainPage = () => {
  const {quotesList,getQuoteList} = useContext(QuotesContext);

  useEffect(()=> {
    console.log('use effect in mainPage')
    getQuoteList();
  },[])

 console.log(quotesList)
  return (
    
    <div className='MainPage'>
      <div className='container'>
        <Category/>
        <QuotesList list={quotesList}/>
      </div>
    </div>
  )
}

export default MainPage
