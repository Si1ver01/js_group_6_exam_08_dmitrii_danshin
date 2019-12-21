import React, { useContext, useEffect } from 'react'
import './MainPage.scss'
import QuotesList from '../../components/QuotesList/QuotesList'
import Category from '../../components/Category/Category'
import { QuotesContext } from '../../context/quotesContext'

const MainPage = (props) => {
  const {quotesList,getQuoteList ,getQuoteListCategory} = useContext(QuotesContext);

  useEffect(()=> {
    console.log('use effect in mainPage')
    if (Object.keys(props.match.params).length){
      getQuoteListCategory(props)
    }else {
      getQuoteList();
    }
    // eslint-disable-next-line
  },[props.match.params.name])

  return (
    
    <div className='MainPage'>
      <div className='container'>
        <Category/>
        {quotesList && <QuotesList list={quotesList}/>}
      </div>
    </div>
  )
}

export default MainPage
