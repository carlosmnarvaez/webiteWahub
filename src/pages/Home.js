import React from 'react'
//import Cards from './components/Cards'
import Header from '../components/Header'
import Banner from '../components/Banner'
import QuienesSomos from '../components/QuienesSomos'
import Testimonios from '../components/Testimonios'
import Footer from '../components/Footer'

const Home = () => (
    <React.Fragment>
      <Header/>
      <Banner/>
      <QuienesSomos/>
      <Testimonios/>
      <Footer/>
    </React.Fragment>
)

export default Home;
