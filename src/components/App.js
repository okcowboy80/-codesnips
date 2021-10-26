import React, { useState } from 'react';
import Editor from './Editor';
import MyNav from './MyNav';
import EditorMenu from './EditorMenu';
import ClearComponent from './ClearComponent';
import Footer from './Footer';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EditorCard from './EditorCard';

function App() {
  const [js, setJs] = useState('');
  const [title, setTitle] = useState('');
  const [language, setLanguage] = useState('');
  const [style, setStyle] = useState('');
  const [languageSelect, setLanguageSelect] = useState('');
  const [author, setAuthor] = useState('');
  const [editorObject, setEditorObject] = useState('');
  
  
  const handleTitle = (title) =>{
    setTitle(title)
  }

  const handleAuthor = (author) =>{
    setAuthor(author)
  }

  const handleLanguage = (str) => {
    setLanguage(languageSelector(str))
    
    return str;
  }

  const handleStyle = (style) => {
    setStyle(style)
  }

  const handleObject = (object) => {
    console.log("Alerted.")
    setEditorObject(object)
    
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
    <Router>
      <>
        <MyNav />
        
        <div className="pane top-pane">
          <EditorMenu onSetTitle={handleTitle} onSetLanguage={handleLanguage} onSetStyle={handleStyle} onSetAuthor={handleAuthor}/>
          <Editor 
            title={title ? title : "CodeSnip 1"}
            language={language ? language : "text"} 
            displayName={languageSelect ? languageSelect : "Text"} 
            author={author ? author : "User_1"}
            style={style ? style : "midnight"}
            value={js} 
            onChange={setJs} 
            onSetobject={handleObject}
          />
          <ClearComponent />
        </div>
        <div className="featuredCardsDiv">
          <div className="container-fluid">
            <div className="featured">
              <h2>Featured CodeSnips</h2>
            </div>
            <div className="row mt-3 mb-3">
              <div className="col-4">
                <EditorCard />
              </div>
              <div className="col-4">
                <EditorCard />
              </div>
              <div className="col-4">
                <EditorCard />
              </div>
              <div className="col-4">
                <EditorCard />
              </div>
              <div className="col-4">
                <EditorCard />
              </div>
              <div className="col-4">
                <EditorCard />
              </div>
            </div>
          </div>
          
        </div>
        <Footer />
      </>
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
      </Switch>
    </Router>
  );
}

export default App;
