import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");
  const handleOnchange = (event) => {
    setText(event.target.value);
  };
  const Uppercase = () => {
    
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showalert("Converted to uppercase",'danger')

  };
  const lowercase = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showalert("Converted to lowercase",'info')

  };

  let CountWord = text.split(" ");

  // find repeted text

  const repeat = (text) => {
    let text12=text.toLowerCase();
    let strArr = text12.split(" ");
    
    const res = [];
    for (let i = 0; i < strArr.length; i++) {
      if (strArr.indexOf(strArr[i]) !== strArr.lastIndexOf(strArr[i])) {
        if (!res.includes(strArr[i])) {
          res.push(strArr[i]);
        }
      }
    }
    return res.join(" ");
  };

  let textRepeater = repeat(text);
  const find_repeat=()=>{
    if(textRepeater!==null){

      document.getElementById('reapeat_text').innerHTML=textRepeater;
    }
  }

  // colse repeted text

  // copy text

  function copyTextfun() {
    var copyText = document.getElementById("mybox");
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
    navigator.clipboard.writeText(copyText.value);
    copyText.select();
    props.showalert("Text Copied",'info')

  }
  // close copy text

  // remove space
  
  const removeSpace =()=>{
    
    let newText=text.split(/[ ] +/)
    setText(newText.join(" "))
    props.showalert("Extra Spaces Removed",'secondary')

  }
  // close space 
  
  // clear text 
  const textClear = () => { 
    setText('')
    props.showalert("Text clear",'warning')

   }
  // close clear text 
  return (
    <div className="container">
      <div className="mb-3 my-4">
        <h3 className="mb-3">{props.heading}</h3>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnchange}
          id="mybox"
          rows="10"
        ></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-danger my-2" onClick={Uppercase}>
        Uppercase
      </button>
      <button disabled={text.length===0}  className="btn btn-success mx-3 my-2" onClick={lowercase}>
        Lowercase
      </button>
      <button disabled={text.length===0}  className="btn btn-info my-2" onClick={copyTextfun}>
        Copy Text
      </button>
      <button disabled={text.length===0}  className="btn btn-warning my-2 mx-3" onClick={textClear}>
        Clear Text
      </button>
      <button disabled={text.length===0}  className="btn btn-primary my-2 " onClick={removeSpace}>
        Remove extra Spaces
      </button>
      <button disabled={text.length===0}  className="btn btn-secondary mx-3 my-2 " onClick={find_repeat}>
        Find Reapeted Text
      </button>
      <div className="row">
        <div className="col-md-6">
          <h6 className="my-2">Word Counts : {CountWord.filter((element)=>{return (element.length!==0)}).length}</h6>
          <h6>Character Counts : {text.length}</h6>
          <h6>Time to read : {0.008 * CountWord.filter((element)=>{return (element.length!==0)}).length}</h6>
        </div>
        <div className="col-md-6">
          <div className="preview">
            <h5>Preview : </h5>
            <p>{text.substring(0, 25)}..</p>
          </div>
          <div>
            <h5>Reapeted Word :</h5>
            <p id="reapeat_text"></p>
          </div>
        </div>
      </div>
    </div>
  );
}

