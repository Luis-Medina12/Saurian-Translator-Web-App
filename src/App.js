import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Translator from './components/Translator';
import React, {useEffect, useState} from "react";
import Footer from './components/Footer/Footer';

function App() {

  const [text, setText] = useState(null);
  const [transalate, setTranslate] = useState(null);

  const handleInputChange = (event) => {
  const { name, value } = event.target;
  setText(prevState => ({
    ...prevState,
    [name] : value
  }));
};

const translateInput = () =>{
  // setTranslate(prevState => ({
  //   ...prevState,text
  // }));
  setTranslate(text.text);
};

  return (
    <div className="App">
      
      {/* <header className="App-header">
        Saurian-English Translator
      </header> */}

      <Header/>
      

      <body className = "App-body">
        <p>Welcome to the saurian Translator! Here you can translate sentances from English to Saurian and Saurian to English.</p>

        <textarea placeholder='Enter your text here' name="text" className = "Input-box" onChange={handleInputChange}/>
        <button onClick = {translateInput} className = "submit-button" >TRANSLATE</button>
          {transalate!=null && <p className='result-window'>Translation:</p>}
          {text!=null && <Translator text = {transalate} className='result-window'/>}
      </body>
      <Footer/>
    </div>
  );
}

export default App;
