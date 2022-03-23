import React from 'react';
import About from './About';
import Navbar from './navbar';
// import TextForm from './TextForm'
const Main =()=>{
  return(
    <>
    <Navbar  title="MyWebs"/>
    {/* <TextForm heading="Enter the text to analyze" /> */}
   
    < About />
 
   </>
  )
}
export default Main;