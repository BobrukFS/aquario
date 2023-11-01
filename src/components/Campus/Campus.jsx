import React from 'react'
import { Avisos } from './Avisos/Avisos'
import { Router } from 'react-router-dom'
import Header from '../Header/Header'
import { Navbar } from '../Navbar/Navbar'

export const Campus = () => {
  return (<>
        <Header></Header>
        <Navbar />
        <Avisos></Avisos>

 
        </>)
}
