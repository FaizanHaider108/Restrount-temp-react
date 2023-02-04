import React from 'react'
import './Header.css';
import SubHeading from '../../components/SubHeading/SubHeading';
import images from '../../constants/images';
const Header = () => {
  return (
    <div className='app__header app__wrapper section__padding' id="home">
      <div className='app__wrapper-info'>

        <SubHeading tital="Chase the new flavour"/>
        <h1 className='app__header-h1'>The Key to fine Dining</h1>
        <p className='p__opensans' style={{margin:"2rem 0"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, adipisci facere? Dolor odit commodi aut officia corrupti dignissimos, ipsaae, eum maiores?</p>
        <button type='button'className='custom__button'>Explore menu</button>
      </div>

      <div className='app__wrapper-img'>
          <img src={images.welcome} alt="header-img" />
      </div>
    </div>
  )
}

export default Header