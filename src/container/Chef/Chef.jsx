import React from 'react'
import images from '../../constants/images'
import { SubHeading } from '../../components';
import './Chef.css';
const Chef = () => {
  return (
    <div className='app__bg app__wrapper section__padding'>
      <div className='app__wrapper-img app__wrapper-img_reverse'>
        <img src={images.chef} alt="Chef-img" />
      </div>

      <div className='app__wrapper-info'>
            <SubHeading tital={"Chef's Word"}/>
            <h1 className='headtext__cormorant'>What we believe in</h1>

        <div className='app__chef-content'>
          <div className='app__cheef-content_qoute'>
            <img src={images.quote} alt="quote" />
            <p className='p__cormorant'>Lorem, ipsum dolor sit amet consectetur ncidunt ipsa quibusdam ut!</p>
          </div>  
          <p className='p__cormorant'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, labore deleniti. Ratione inventore eius placeat libero nesciunt nemo earum explicabo corporis vel vero.</p>
        </div>

        <div className='app__chef-sign'>
          <p>Kevin Leo</p>
          <p className='p__cormorant'>CEO & Founder</p>
          <img src={images.sign} alt="sign" />
          </div>
      </div>
    </div>
  )
}

export default Chef