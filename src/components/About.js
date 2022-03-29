import React from 'react'
import { useState } from 'react';


export default function () {
   const [myStyle, setmyStyle] = useState({
       color:"#000",
       backgroundColor:"#fff"
   });
   const [btnText, setbtnText] = useState(
       'Enabel Dark mode'
   );
   const [btnColor ,setbtnColor]=useState({color:"#fff",backgroundColor:'#dc3545'})
   const toggleStyle=()=>{
      if(myStyle.color==="#fff"){
        setmyStyle({
            color:"#000",
            backgroundColor:"#fff" 
         })
         setbtnText('Enable Dark Mode')
         setbtnColor({
            color:"#fff",backgroundColor:'#dc3545'
         })
      }
      else{
        setmyStyle({
            color:"#fff",
            backgroundColor:"#212529",
            border:"0.3px solid #fff" 
         })
         setbtnText('Enable Light Mode')
         setbtnColor({
            color:"#fff",backgroundColor:'#212529',
            border:"2px solid #fff"
         })
      }
   }

  return (
      <>
     
    <div className="container my-4 p-3" style={myStyle}>
        <h3 className='my-2'>About Us</h3>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" style={myStyle} aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={myStyle} data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingThree" style={myStyle}>
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
<button className='btn my-4' style={btnColor} onClick={toggleStyle} >{btnText}</button>
    </div>
    </>
  )
}
