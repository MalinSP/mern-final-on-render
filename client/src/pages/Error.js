import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/ErrorPage'
import img from '../assets/images/not-found.svg'

const Error = () => {
  return (
    <Wrapper className='full-page'>
      <div>
        <img src={img} alt='not found' />
        <h3>Lorem ipsum dolor sit amet.</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel optio
          quo quisquam eos consectetur, ex aliquam et quibusdam enim quidem?
        </p>
        <Link to='/'>back home</Link>
      </div>
    </Wrapper>
  )
}

export default Error
