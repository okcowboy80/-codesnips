import React, { Component } from 'react';
import { Button } from 'reactstrap';

export class ClearComponent extends Component {
    
    
    render() {
        const onClear = () => {
            window.location.reload();
        }
        return (
            <div className="myEditor mt-auto">
                <Button className="btn mt-3" onClick={onClear}>Reset</Button>
            </div>
        )
    }
}

export default ClearComponent
