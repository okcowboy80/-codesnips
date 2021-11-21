import React, { Component } from 'react';
import { Button } from 'reactstrap';

export class ClearComponent extends Component {
    
    render() {
        const onClear = () => {
            window.location.reload();
        }
        const onCopy = () => {
            var text = this.props.data;
            navigator.clipboard.writeText(text).then(function() {
            console.log('Copying to clipboard was successful!');
            }, function(err) {
            console.error('Error: Could not copy text: ', err);
            });
            
        }
        return (
            <div className="myEditor mt-auto">
                <Button className="copy" onClick={onCopy}>Copy </Button>
                <Button className="btn mt-3" onClick={onClear}>Reset</Button>
            </div>
        )
    }
}

export default ClearComponent
