import React from 'react';


const Food = ({food, onSignup}) => {
    let image;
    if (food.url !== undefined) {
        image = food.url;
    } else {
        image = "https://picsum.photos/1200";
    }

    return (

        <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 mb-3">
            <div className="card">
                <div className="card-body">
                    <img
                        className="d-block rounded-circle mx-auto align-items-center flex-grow-1 d-flex flex-row-reverse justify-content-center"
                        src={image}
                        width={200} style={{width: 200, height: 200}}/>
                </div>
                <div className="card-body">
                    <p className="card-text">
                        <b>Host:</b> {food.owner}
                        <br/>
                        <b>Contact:</b> {food.email && food.email}
                        <br/>
                        <b>Address:</b> {food.location}
                        <br/>
                        <b>Food</b>: {food.food}
                        <br/>
                        <b>Available from:</b>
                        &nbsp; {new Date(+food.time).toLocaleString()}</p>

                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button" className="btn btn-primary btn-lg">Sign me up!</button>
                        </div>
                        <small className="text-muted">Posted: {new Date(+food.timestamp).toLocaleString()}</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Food;