import React from 'react';
import Home from './views/Home/Home';
import Callback from '../Auth/Callback';
import Auth from "../Auth/Auth";
import BlogPage from "./views/BlogPage/BlogPage";
import FoodShare from "./views/FoodShare/FoodShare";
import Navbar from "./common/Navbar/Navbar";
import {Router} from "@reach/router";
import ShowMap from "./views/ShowMap/ShowMap";
import PostPage from "./views/PostPage/PostPageContainer";
import WidgetsContainer from "./views/Widgets/WidgetsContainer";

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
    if (/access_token|id_token|error/.test(nextState.location.hash)) {
        auth.handleAuthentication();
    }
};

const MainRoutes = () => {

    let CallbackAuth = props => {
        handleAuthentication(props);
        return (
            <Callback auth={auth} {...props} />
        )
    };

    return (
        <div>
            <Navbar auth={auth}/>
            <Router>
                <Home exact path="/home" auth={auth}/>
                <Home exact path="/" auth={auth}/>
                <BlogPage path="/dashboard/blog" auth={auth}/>
                <ShowMap path="/dashboard/map" auth={auth}/>
                <FoodShare path="/dashboard/food-share" auth={auth}/>
                <PostPage path="/dashboard/post/:id" auth={auth}/>
                <WidgetsContainer path="/widgets" auth={auth}/>
                <CallbackAuth path="/callback" />
            </Router>
        </div>)
};


export default MainRoutes;
