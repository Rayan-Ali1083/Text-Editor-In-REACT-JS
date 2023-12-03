import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setmode] = useState('light');
  const [alert,setAlert] = useState(null);
  const [textColor, settextColor] = useState('black');
  const [backColor, setbackColor] = useState('#ECECEC');
  const [navbackColor, setnavbackColor] = useState('#ECECEC')
  const showAlert = (message,type) => {
    setAlert ({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  const toggleMode = (mode)=>{
    setmode(mode);
    if(mode === 'light'){
      settextColor('black');
      setbackColor('#ECECEC');
      setnavbackColor('#ECECEC');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode enabled', 'success');
    }else if(mode === 'dark'){
      settextColor('white');
      setbackColor('black');
      setnavbackColor('black');
      document.body.style.backgroundColor = 'black';
      showAlert('Dark mode enabled', 'success');
    }else if(mode === 'green'){
      settextColor('#18BC14');
      setbackColor('black');
      setnavbackColor('black');
      document.body.style.backgroundColor = 'black';
      showAlert('Green mode enabled', 'success');
    }else if(mode === 'purple'){
      settextColor('white');
      setbackColor('#C465DC');
      setnavbackColor('#C465DC')
      document.body.style.backgroundColor = '#E991FF';
      showAlert('Purple mode enabled', 'success');
    }else{
      settextColor('black');
      setbackColor('#F8F8F8');
      setnavbackColor('#F8F8F8');
      showAlert('Light mode enabled', 'success');
    }
  }

  return (
    <>
      <Navbar title="TextUtils" mode={mode} textColor={textColor} navbackColor={navbackColor} backColor={backColor} toggleMode={toggleMode} aboutText={'About Text'}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm heading="Enter a text to analyze below" showAlert = {showAlert} toggleMode={toggleMode} textColor={textColor} backColor={backColor}/>
      </div>
    </>
  );
}
 
export default App; 