import React, {Component} from 'react';
import Food from "./Food/Food";

class FoodList extends Component {

    componentDidMount() {
        this.props.fetchLeftovers();
    }

    render() {

        if (this.props.leftoverList.loading) {
            return (
                <div>Loading...</div>
            )
        }

        return (
            <div className="py-4 bg-dark" id="leftovers">
                <div className="container">
                    <div className="row">
                        {this.props.leftoverList.leftovers.map(food => {
                            return (
                                <Food
                                    key={food.id}
                                    onSignup={()=>{}}
                                    food={food}/>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
};

export default FoodList;