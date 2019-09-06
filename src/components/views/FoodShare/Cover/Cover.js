import React from 'react';

const Cover = () => {
    return (
        <div className="py-5 text-center text-white filter-dark" style={{
            backgroundImage: 'url("https://www.ocf.berkeley.edu/~sather/wp-content/uploads/2018/01/food--1200x600.jpg")',
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'repeat'
        }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <h1 className="mb-3 shadow-sm"><b>Leftover food-sharing is caring!</b></h1>
                        <p className="lead mb-0">This demo site is a place where restaurants can post their leftover
                            food and people can sign up to get it!</p>
                        <a className="btn btn-primary m-3" href="#leftovers">
                            <b>Get food</b>
                        </a>
                        <a className="btn btn-outline-primary" data-toggle="modal" data-target="#exampleModal">
                            <b>Share food</b>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cover;