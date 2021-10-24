import React, { useState } from 'react';
import Editor from './Editor';
import MyNav from './MyNav';
import EditorMenu from './EditorMenu';
import ClearComponent from './ClearComponent';

function App() {
  const [js, setJs] = useState('')
  const [title, setTitle] = useState('')
  const [language, setLanguage] = useState('')
  const [style, setStyle] = useState('')
  const [languageSelect, setLanguageSelect] = useState('')

  
  const handleTitle = (title) =>{
    setTitle(title)
  }

  const handleLanguage = (str) => {
    setLanguage(languageSelector(str))
    
    return str;
  }

  const handleStyle = (style) => {
    setStyle(style)
  }

  const languageSelector = (language) => {
    switch(language) {
      case "JavaScript" :
        setLanguageSelect("JavaScript")
        // setLanguage("javascript")
        return "javascript";
      case "HTML" :
        setLanguageSelect("HTML")
        // setLanguage("xml")
        return "xml";
      case "CSS":
        setLanguageSelect("CSS")
        // setLanguage("css")
        return "css";
      case "Ruby" :
        setLanguageSelect("Ruby")
        // setLanguage("ruby")
        return "ruby";
      case "Text" :
        setLanguageSelect("Text")
        // setLanguage("text")
        return "text";
      default :
        return "none";

    }
  }

  return (
    <>
      <MyNav />
      
      <div className="pane top-pane">
        <EditorMenu onSetTitle={handleTitle} onSetLanguage={handleLanguage} onSetStyle={handleStyle}/>
        <Editor 
          title={title ? title : "CodeSnip 1"}
          language={language ? language : "text"} 
          displayName={languageSelect ? languageSelect : "Text"} 
          style={style ? style : "midnight"}
          value={js} 
          onChange={setJs} 
        />
        <ClearComponent />
      </div>
      <div className="pane">
        
      </div>
    </>
  );
}

export default App;
