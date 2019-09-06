import React, {Component} from 'react';
import ShareFoodForm from "./ShareFoodForm/ShareFoodForm";

class ShareFoodModal extends Component {

    constructor() {
        super();
        this.state = {
            leftover: {
                time: "",
                food: "",
                owner: "",
                location: "",
                url: "",
                email: localStorage.getItem('email')
            }
        }
    }

    onChange = e => {
        if (e.target.name === "time") {
            let leftover = {...this.state.leftover};
            leftover[e.target.name] = new Date(e.target.value).valueOf();
            this.setState({leftover});
        }
        let leftover = {...this.state.leftover};
        leftover[e.target.name] = e.target.value;
        this.setState({leftover});
    };

    onSubmit = () => {
        if (this.getErrors().length === 0) {
            let el = document.getElementById("exampleModal");
            el.click();
            this.props.createLeftover(this.state.leftover);
            this.setState({
                leftover: {
                    time: "",
                    food: "",
                    owner: "",
                    location: "",
                    url: ""
                }
            })
        }
    };

    getErrors = () => {
        let errors = [];
        for (let key of Object.keys(this.state.leftover)) {
            if (this.state.leftover[key] === "") {
                errors.push(key)
            }
        }
        return errors;
    };

    render() {
        return (
            <div className="modal fade" id="exampleModal">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <a className="btn btn-link btn-block" style={{display: 'block'}} target="_blank"><i
                                className="fa fa-gift fa-fw fa-5x py-1"/></a>
                        </div>
                        <div className="modal-body">
                            <div className="col-md-12 p-3">
                                <ShareFoodForm leftover={this.state.leftover} onChange={this.onChange}/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShareFoodModal;