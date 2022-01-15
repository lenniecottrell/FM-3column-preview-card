import React from 'react'

const Category = ({icon, title}) => {
  return (
    <div>
      {/* <img src={icon} alt="" aria-hidden="true"/> */}
      <h2 className="sectionTitle">{title}</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsam cum cupiditate?</p>
      <button type="button">Learn More</button>
    </div>
  )
}

export default Category;
