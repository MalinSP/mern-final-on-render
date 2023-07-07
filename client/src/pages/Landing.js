import React from 'react'
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'
import { Link, Navigate } from 'react-router-dom'
import { useAppContext } from '../context/appContext'

const Landing = () => {
  const { user } = useAppContext()
  return (
    <>
      {user && <Navigate to='/' />}
      <Wrapper>
        <nav>
          <Logo />
        </nav>
        <div className='container page'>
          <div className='info'>
            <h1>
              job <span>tracking</span> app
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. A ipsam
              nulla maxime illum voluptatibus recusandae quasi, dolore explicabo
              earum suscipit doloremque dignissimos dolorum veritatis vel
              perspiciatis corrupti est quae dolorem, nisi similique! Impedit
              dignissimos libero quidem unde, expedita, architecto iste
              accusamus quos ipsum quis ratione incidunt! Itaque beatae
              accusantium voluptatum!
            </p>
            <Link to='/register' className='btn btn-hero'>
              Login/Register
            </Link>
          </div>
          <img src={main} alt='job hunt' className='img main-img' />
        </div>
      </Wrapper>
    </>
  )
}

export default Landing
