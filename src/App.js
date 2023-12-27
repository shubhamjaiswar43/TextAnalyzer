import React,{useState} from 'react';
import NavBar from './components/NavBar';
import MyText from './components/MyText';  
import Alert from './components/Alert';
import About from './components/About';
import Contact from './components/Contact';
import {
  BrowserRouter as Rounter,
  Routes,
  Route
} from 'react-router-dom';
const title = "TextUtils"
const navHead = ['Home','About Us','Contact Us']
const heading = "Enter Your Text Below";
function App() {
  const [mode,changemode]=useState(false);
  const [alert,setAlert] = useState(null);
  const sendAlert = (message,type)=>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }
  const toggleMode = ()=>{
    if(mode){
      changemode(false);
      document.title = 'Text Analyzer';
    }else{
      changemode(true);
      document.title = 'Text Analyzer - Dark Mode';
    }
  }
  return (
    <>
      <Rounter>
        <NavBar title={title} navHead={navHead} sendAlert={sendAlert} mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <Routes>
        <Route exact path='/' element={<MyText heading = {heading} sendAlert={sendAlert}/>}/>
        <Route exact path='/about' element={< About />}/>
        <Route exact path='/contact' element={< Contact sendAlert={sendAlert} />}/>
        </Routes>
      </Rounter> 
    </>
  );
}
export default App;
