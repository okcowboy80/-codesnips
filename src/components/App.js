import React, { useState, useEffect } from 'react';
import Editor from './Editor';
import MyNav from './MyNav';
import EditorMenu from './EditorMenu';
import ClearComponent from './ClearComponent';


function App() {
  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [js, setJs] = useState('')
  const [srcDoc, setSrcDoc] = useState('')
  const [title, setTitle] = useState('')
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
      <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
    </html>
      `)
    }, 250)
    
    return () => clearTimeout(timeout)
  }, [html, css, js])

  const handleCallback = (titleData) =>{
    setTitle(titleData)
  }

  return (
    <>
      <MyNav />
      
      <div className="pane top-pane">
        <EditorMenu onSetTitle = {handleCallback}/>
        <Editor 
          title={title}
          language="javascript" 
          displayName="JavaScript" 
          value={js} 
          onChange={setJs} 
        />
        <ClearComponent />
      </div>
      <div className="pane">
        <iframe
          srcDoc={srcDoc} 
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default App;
