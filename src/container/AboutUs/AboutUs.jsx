import React from 'react'
import './AboutUs.css';
import images from '../../constants/images';
const AboutUs = () => {
  return (
    <div className='app__aboutus app__bg flex__center section__padding' id='about'>

      <div className='app__aboutus-overlay flex-center'>
          <img src={images.G} alt="G letter" />
      </div>

      <div className='app__aboutus-content'>

        <div className='app__aboutus-content_about'>
          <h1 className='headtext__Cormorant'>About us</h1>
          <img src={images.spoon} alt="spoon-img" />
          <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores labore omnis voluptatibus nisi iste, excepturi deserunt natus vel ipsam reprehenderit ab incidunt mollitia.</p>
          <button type='button' className='Custom__button'>Know More</button>
        </div>
        <div className='app__aboutus-content-knife'>
            <img src={images.knife} alt="Knife-img" />
        </div>
        <div className='app__aboutus-content_history'>
          <h1 className='headtext__Cormorant'>Our History</h1>
          <img src={images.spoon} alt="spoon-img" />
          <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores labore omnis voluptatibus nisi iste, excepturi deserunt natus vel ipsam reprehenderit ab incidunt mollitia.</p>
          <button type='button' className='Custom__button'>Know More</button>
        </div>
      </div>
  </div>
  )
}

export default AboutUs