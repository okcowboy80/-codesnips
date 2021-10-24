import React, { Component } from 'react';
import { Button } from 'reactstrap';
import CodeMirror from 'codemirror';


export class ClearComponent extends Component {
    
    
    render() {
        const onClear = () => {
            window.location.reload();
        }
        return (
            <div className="myEditor mt-auto">
                <Button className="btn mt-3" onClick={onClear}>Clear</Button>
            </div>
        )
    }
}

export default ClearComponent
