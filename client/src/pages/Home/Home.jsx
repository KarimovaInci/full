import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Section1 from '../../components/Section1/Section1'
import Section2 from '../../components/Section2/Section2'
import Section3 from '../../components/Section3/Section3'
import Section4 from '../../components/Section4/Section4'
import Section5 from '../../components/Section5/Section5'
import {Helmet} from "react-helmet";

const Home = () => {
  return (
 
<>
<Helmet>
  <title>Home</title>
</Helmet>
    <Header/>
    <Section1/>
    <Section2/>
    <Section3/>
    <Section4/>
    <Section5/>
    <Footer/>
</>
  )
}

export default Home