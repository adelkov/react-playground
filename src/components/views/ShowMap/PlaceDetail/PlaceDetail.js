import React from 'react';
import Paper from "@material-ui/core/Paper/Paper";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAddressBook, faPhone, faStroopwafel} from "@fortawesome/free-solid-svg-icons";

const PageDetail = ({isFetching, place}) => {
    const postStyle = {
        padding: 10,
        backgroundColor: '#1b2832',
        textDecoration: 'none'
    };

    if (isFetching) {
        return (
            <FontAwesomeIcon spin icon={faStroopwafel}/>
        )
    }

    const missingData = "N/A";

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="card" style={{width: 200, height: 200}}>
                        <div className="card-body text-white bg-light h-50">
                            <h4 className="card-title">{place.name}</h4>
                        </div>
                        <div className="card-body bg-dark text-white h-25">
                            <p className="card-title"><FontAwesomeIcon
                                icon={faAddressBook}/>{"\t" + place.formatted_address}</p>
                        </div>
                        <div className="card-body bg-dark text-white h-25">
                            <p className="card-title"><FontAwesomeIcon
                                icon={faPhone}/>{"\t" + place.formatted_phone_number && place.formatted_phone_number}
                            </p>
                        </div>
                        <div className="card-body bg-dark text-white h-25">
                            <p className="card-title">{place.opening_hours && place.opening_hours.open_now}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default PageDetail;