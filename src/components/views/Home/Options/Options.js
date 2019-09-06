import React from 'react';

const Options = () => {

    const options = [
        {title: 'Maps', text: "Find nearby restaurants, bars and other amenities...", log: 'street-view', link: "/dashboard/map"},
        {title: 'Blog', text: "Share your thoughts and ideas with the community...", log: 'bathtub', link: "/dashboard/blog"},
        {title: 'Leftovers', text: "This demo site is for restaurants to post their leftover food for people in need...", log: 'binoculars', link: "/dashboard/food-share"},
    ];

    return (
        <div className="py-3 text-center">
            <div className="container">
                <div className="row justify-content-center">
                    {options.map(option => {
                        return (
                            <div className="col-md-4 p-4" key={option.title}>
                                <i className={"d-block fa fa-" + option.log + " fa-3x mb-2 text-white"}/>
                                <h4 className="text-white"><b>{option.title}</b></h4>
                                <p className="text-white">{option.text}</p>
                                <a className="btn btn-lg mx-1 btn-outline-primary" href={option.link}>Let's Go</a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Options;