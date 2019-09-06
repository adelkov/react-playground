import React from 'react';

const Loader = () => {
    return (
        <div className="container text-lg-center">
            <h4>
                <i className={"d-block fa fa-spinner fa-3x mb-2 text-white fa-spin"}/>
            </h4>
        </div>
    );
};

export default Loader;