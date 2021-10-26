import React from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/theme/material-darker.css'
import 'codemirror/theme/midnight.css'
import 'codemirror/theme/3024-day.css'
import 'codemirror/theme/3024-night.css'
import 'codemirror/theme/cobalt.css'
import 'codemirror/theme/colorforth.css'
import 'codemirror/theme/dracula.css'
import 'codemirror/theme/duotone-light.css'
import 'codemirror/theme/eclipse.css'

import 'codemirror/mode/xml/xml'
import 'codemirror/mode/css/css'
import 'codemirror/mode/ruby/ruby'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/addon/scroll/simplescrollbars'
import 'codemirror/lib/codemirror.css';
// import CodeMirror from 'codemirror'
import { Controlled as ControlledEditor } from 'react-codemirror2'

export default function Editor(props) {
    
    const {
        title,
        language,
        displayName,
        value,
        onChange,
        style,
        author
    } = props
    
    function handleChange(editor, data, value) {
        onChange(value)
    }
// Need to create a component that will access the data and save to a database and later render as a new component
    return (
        <div className={`editor-container`}>
            
            <div className="editor-title">
                {displayName}
                <span>{title}</span>
                
                <span>{author}</span>
            </div>
            
            <ControlledEditor 
                
                onBeforeChange={handleChange}
                // onClearEditor={handleClearEditor}
                value={value}
                className="code-mirror-wrapper"
                id="codemirror"
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    lineNumbers: true,
                    scrollbarStyle: "simple",
                    theme: style,
                    tabMode: "default",
                }}
            />
            
        </div>
    )
}
