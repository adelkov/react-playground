import React, {Component} from 'react';
import Home from "../components/views/Home/Home";

export default function withAuth(WrappedComponent) {

     return class extends Component {

        constructor(props, context) {
            super(props, context);
        }

         render() {
             // Filter out extra props that are specific to this HOC and shouldn't be
             // passed through
             const { auth, ...passThroughProps } = this.props;

             if (!auth.isAuthenticated()) {
                 return <Home auth={auth} />
             }

             // Pass props to wrapped component
             return (
                 <WrappedComponent
                     {...passThroughProps}
                 />
             );
         }
    }
}
