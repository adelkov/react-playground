import React from 'react';
import {Link} from "@reach/router";
import {connect} from "react-redux";


export const Navbar = ({auth}) => {


    let action = {};

    if (auth.isAuthenticated()) {
        action = {
            title: "Logout",
            method: auth.logout
        }
    } else {
        action = {
            title: "Sign in",
            method: auth.login
        }
    }


    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container">
                <button className="navbar-toggler navbar-toggler-right border-0 p-0" type="button"
                        data-toggle="collapse" data-target="#navbar20">
                    <p className="navbar-brand text-white mb-0">
                        <i className="fa d-inline fa-lg fa-stop-circle"/>Menu</p>
                </button>
                <div className="collapse navbar-collapse" id="navbar20">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item text-white">
                            <Link to="/dashboard/map" className="nav-link">Maps</Link>
                        </li>
                        <li className="nav-item text-white">
                            <Link to="/dashboard/blog" className="nav-link">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/dashboard/food-share" className="nav-link">Leftovers</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/widgets" className="nav-link">Widgets</Link>
                        </li>
                    </ul>
                    <Link to="/" className="d-none d-md-block lead mb-0 text-white">Landing</Link>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a onClick={action.method} className="nav-link">{action.title}</a>
                        </li>
                        <li className="nav-item mx-1"><a className="nav-link" href="#">
                            <i className="fa fa-facebook fa-fw fa-lg text-white"/>
                            <i className="fa fa-github fa-fw fa-lg text-white"/>
                            <i className="fa fa-instagram fa-fw fa-lg text-white"/>
                            <i className="fa fa-twitter fa-fw fa-lg text-white"/>
                        </a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

const mapStateToProps = state => {
    return {
        user: state.users.email
    }
};

export default connect(mapStateToProps)(Navbar);
