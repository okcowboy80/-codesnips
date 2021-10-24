import React, { Component } from 'react'


export default class Footer extends Component {
    render() {
        return (
            <div>
                <section>
                    <footer>
                        <div className="container-fluid footerDiv1">
                            <div className="row justify-content-center">
                                <div className="col">
                                </div>
                                <div className="col text-center" id="buttonDiv">
                                    <button type="button" class="btn btn-outline-light btn-rounded " id="btnSignUp">
                                        Register for free! Sign up!
                                    </button>
                                </div>
                                <div className="col">
                                    
                                </div>
                            </div>
                        </div>
                        <div className="footerDiv2">
                            <div>
                                <small className="copyright text-light">&copy;2021: CodeSnips.com</small>
                            </div>
                        </div>
                    </footer>
                </section>
            </div>
        )
    }
}
