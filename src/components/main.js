import React from 'react';
import Navbar from './navbar';
import TextForm from './TextForm'
const Main =()=>{
  return(
    <>
    <Navbar  title="MyWebs"/>
    <TextForm heading="Enter the text to analyze" />
   </>
  )
}
export default Main;