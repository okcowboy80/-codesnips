import React, { Component } from 'react';
import { Button } from 'reactstrap';


export class ClearComponent extends Component {
    render() {
        return (
            <div className="clearBtn myEditor mt-auto">
                <Button className="btn mt-3">Clear</Button>
            </div>
        )
    }
}

export default ClearComponent
