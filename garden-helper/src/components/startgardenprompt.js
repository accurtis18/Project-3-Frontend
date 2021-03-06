import React from 'react';
import { Redirect } from 'react-router-dom';
import MainNavigation from './mainnavigation';

class StartGardenPrompt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
    }

    render() {
        return this.state.redirect ? <Redirect to="/garden/new" /> : (
            <div className="container-fluid h-100 mainpagesbackground">
                <MainNavigation />
                <div className="row h-50 mt-5">
                    <div className="col-md-12 d-flex justify-content-center">
                        <div className="card w-50 mt-2 mb-5 my-2 pt-5 overflow-auto d-flex maincardcontainer">
                            <div className="card-body mx-auto mt-5 d-flex flex-column plotstablecontainer">
                                <h3 className="card-title">You have no Gardens. Want to start one?</h3>
                                <button className='btn btn-dark mt-4 mx-auto garden-prompt-button' onClick={() => this.setState({redirect : true})}>Start</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default StartGardenPrompt;