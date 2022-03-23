import React,{useState} from 'react'

export default function TextForm(props) {
  const handleOnchange=(event)=>{
    setText(event.target.value)
  }
  const Uppercase=()=>{
    let newtext=text.toUpperCase();
    setText(newtext)
  }
  const lowercase=()=>{
    let newtext=text.toLowerCase();
    setText(newtext)
  }
  const [text,setText]=useState('Enter text here');

  let CountWord=text.split(' ');
  
// find repeted text 

const repeat = text => {
  const strArr = text.split(" ");
  const res = [];
  for(let i = 0; i < strArr.length; i++){
     if(strArr.indexOf(strArr[i]) !== strArr.lastIndexOf(strArr[i])){
        if(!res.includes(strArr[i])){
           res.push(strArr[i]);
        };
     }; 
  };
  return res.join(" ");
};
  return (
    <div className='container'>
      
<div className="mb-3 my-4">
    <h3 className='mb-3'>{props.heading}</h3>
  <textarea className="form-control" value={text} onChange={handleOnchange} id="mybox" rows="10"></textarea>
    </div>
    <button className='btn btn-danger ' onClick={Uppercase}>Uppercase</button>
    <button className='btn btn-success mx-3' onClick={lowercase}>Lowercase</button>

    <div className="row">
      <div className="col-md-6">
        <h6 className='my-2'>Word Counts : {CountWord.length }</h6>
        <h6>Character Counts : {text.length }</h6>
        <h6>Time to read : {0.008*CountWord.length }</h6>
      </div>
      <div className="col-md-6">
        <div className="preview">
          <h5>Preview : </h5>
          <p>{text.substring(0,25)}...</p>
        </div>
       <p>{repeat}</p>
      </div>
    </div>
    </div>
  )
}
