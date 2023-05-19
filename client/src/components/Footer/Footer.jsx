import React from 'react'
import { AiFillHeart } from 'react-icons/ai';
import "./Footer.scss"

const Footer = () => {
  return (
    <>
    <div className="footer">
    <div className="line"></div>
    <p>Copyright ©2023 All rights reserved | This template is made with <AiFillHeart className='heart'/> by <span>Colorlib</span> </p>
    </div>
    

    </>
  )
}

export default Footer