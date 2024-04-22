import React from 'react'
import logoImg from "../assets/logoImg.png"

function LogoFooter({width = '180px'}) {
  return (
    <>
      <img src={logoImg} width = '160px' alt="BigCo Inc. logo"/>
    </>
  )
}

export default LogoFooter