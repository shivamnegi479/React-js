import React, { useState } from "react";
// import About from './About';
import Alert from "./Alert";
import Navbar from "./navbar";
import TextForm from "./TextForm";
const Main = () => {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null)
  const showAlert= (message, type) =>{
    setAlert({
      msg:message,
      type:type
    })
  }

  const togllemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#212529";
      document.body.style.color = "#fff";
      document.getElementById("mybox").style.background = "#212529";
      document.getElementById("mybox").style.color = "#fff";
      showAlert('Dark mode has been enabled','success')
    } else {
      setmode("light");
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#000";
      document.getElementById("mybox").style.background = "#fff";
      document.getElementById("mybox").style.color = "#000";
      showAlert('Light mode has been enabled','success')
    }
  };
  return (
    <>
      <Navbar title="MyWebs" mode={mode} toggleMode={togllemode} />
      <Alert myalert={alert} />
      <TextForm heading="Enter the text to analyze" />
      {/* < About /> */}
    </>
  );
};
export default Main;
