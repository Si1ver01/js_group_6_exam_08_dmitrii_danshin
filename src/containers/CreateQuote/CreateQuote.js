import React, { useContext } from 'react'
import './CreateQuote.scss'
import Form from '../../components/Form/Form'
import { QuotesContext } from '../../context/quotesContext'

const CreateQuote = (props) => {

  return (
    <div className='CreateQuote'>
      <div className='container'>
        <Form {...props}/>
      </div>
    </div>
  )
}

export default CreateQuote
