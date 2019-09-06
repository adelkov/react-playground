import React from 'react';

const ShareFoodForm = ({leftover, onChange}) => {
    return (
        <form method="post">
            <div className="form-group">
                <label>Your establishment:</label>
                <input type="text"
                       className="form-control"
                       placeholder="e.g.: Mario's steakhouse"
                       required="required"
                       name="owner"
                       onChange={onChange}
                       value={leftover.owner}
                />
            </div>
            <div className="form-group">
                <label>Address:</label>
                <input type="text"
                       onChange={onChange}
                       value={leftover.location}
                       className="form-control"
                       required="required"
                       name="location"
                       placeholder="e.g.: George street 1."/>
            </div>
            <div className="form-group">
                <label>Available from:</label>
                <input type="datetime-local"
                       onChange={onChange}
                       value={leftover.time}
                       className="form-control form-control-sm w-50"
                       name="time"
                       />
            </div>
            <div className="form-group">
                <label>Leftover food:</label>
                <input type="text"
                       onChange={onChange}
                       value={leftover.food}
                       className="form-control form-control-sm"
                       name="food"
                       placeholder="e.g.: lasagne and meatloaf"/>
            </div>
            <div className="form-group">
                <label>Picture URL:</label>
                <input type="text"
                       onChange={onChange}
                       value={leftover.url}
                       className="form-control form-control-sm"
                       name="url"
                       placeholder="e.g.: http://this.hu/img/image.png"/>
            </div>
        </form>
    );
};

export default ShareFoodForm;