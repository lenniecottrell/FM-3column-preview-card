import React from 'react'
import Button from './Button'

const Category = ({icon, title}) => {
  return (
    <div>
      <img src={icon} alt="" aria-hidden="true"/>
      <h2 className="sectionTitle">{title}</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsam cum cupiditate?</p>
      <Button />
    </div>
  )
}

export default Category
