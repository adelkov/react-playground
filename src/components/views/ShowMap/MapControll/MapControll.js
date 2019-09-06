import React from 'react';

const MapControll = ({onSelect}) => {


    const options = [
        {title: "restaurant", logo: "cutlery"},
        {title: "bar", logo: "glass"},
        {title: "dentist", logo: "medkit"},
        {title: "hotel", logo: "bed"}
    ];
    return (

        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-bottom"><a className="navbar-brand" href="#">Show
            nearby...</a>
            <div className="container justify-content-center">
                <button className="navbar-toggler navbar-toggler-right border-0" type="button" data-toggle="collapse"
                        data-target="#navbar9">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse text-center justify-content-center" id="navbar9">
                    <ul className="navbar-nav">
                        {options.map(option => {
                            return (
                                <li
                                    className="nav-item mx-2 ml-1"
                                    key={option.title}
                                    onClick={()=>onSelect(option.title)}>
                                    <div className="nav-link navbar-brand mr-0 text-white">
                                        <i className={"fa d-inline fa-lg fa-"+option.logo}/>
                                        <b className="text-capitalize ml-1">{option.title}s</b>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    );


};

export default MapControll;
