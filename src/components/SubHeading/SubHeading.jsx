import React from 'react'
import images from '../../constants/images'
import './SubHeading.css'
const SubHeading = ({ tital }) => {
  return (
    <div style={{ marginBottom: '1rem'}}>
      <p className='p__Cormorant'>{tital}</p>
      <img src={images.spoon} alt="spoon" className='spoon__img'/>
    </div>
  )
}

export default SubHeading