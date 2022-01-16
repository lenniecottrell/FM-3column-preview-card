import React from 'react'
import categories from './data'

const Category = () => {
  categories.map((item) => {return console.log(item.icon)})


  const formattedCategories = categories.map((item) => 
    <div key={item.id} className='category'>
      <img src={item.icon} alt="" />
      <h2>{item.title}</h2>
      <p>{item.text}</p>
      <button>Learn More</button>
    </div>
  )
  return (
    <div>
      {formattedCategories}
    </div>
  )
}

export default Category;
