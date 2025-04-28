import React from 'react'
import Header from '../../component/header'
import { Outlet } from 'react-router-dom'
import Footer from '../../component/footer'
import Card from '../../component/card'

const RootLayout = () => {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default RootLayout