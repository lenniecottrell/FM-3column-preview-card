import React from 'react'
import Category from './Category'
import luxury from '../images/icon-luxury.svg'
import sedan from '../images/icon-sedans.svg'
import suv from '../images/icon-suvs.svg'

const Card = () => {
  return (
    <main className="card">
      <Category icon={sedan} title="Sedans"/>
      <Category icon={suv} title="SUVs"/>
      <Category icon={luxury} title="Luxury"/>
    </main>
  )
}

export default Card
