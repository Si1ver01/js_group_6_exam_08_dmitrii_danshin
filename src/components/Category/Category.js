import React from 'react'
import './Category.scss'
import { CATEGORY_LIST } from '../../const/categoryList'
import {Link} from 'react-router-dom'

const Category = () => {
  return (
    <div className='Category'>
    <h3>Category:</h3>
    <ul className='border'>
      <li><Link to='/'>All</Link></li>
      {CATEGORY_LIST.map(cat => <li key={cat}><Link to={'/category/' + cat}>{cat}</Link></li>)}
    </ul>
  </div>
  )
}

export default Category
