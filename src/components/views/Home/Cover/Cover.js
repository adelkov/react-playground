import React from 'react';
import coverImage from '../../../../img/Optimized-IMG_3220.jpg'

const Cover = ({login}) => {
    return (
        <div>
            <div className="py-5 text-center text-white h-50 filter-dark" style={{
                backgroundImage: `url(${coverImage})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'repeat'
            }}>
                <div className="row">
                    <div className="mx-auto col-lg-8 col-md-10">
                        <h1 className="display-3 mb-4">Welcome to my Project</h1>
                        <p className="lead mb-5">You can find some useless application that I created via React-Redux,
                            Bootstrap, Google Maps and other wonderful open-source projects...</p>
                        <a className="btn btn-lg mx-1 btn-outline-primary" onClick={login}>Sign in</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cover;
