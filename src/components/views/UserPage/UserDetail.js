import React, {Component} from 'react';
import IconAvatar from "../../common/IconAvatar/IconAvatar";

class UserDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            avatars: [
                {id: 1},
                {id: 2}
            ]
        };
    }


    render() {
        return(
            <div>
                {this.state.avatars.map(avatar => {
                    return (
                        <IconAvatar
                            key={avatar.id}
                        />
                    )
                })}
            </div>
        )
    }
};

UserDetail.propTypes = {};

export default UserDetail;
