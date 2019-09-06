import React from 'react';
import Cover from "./Cover/Cover";
import FoodListContainer from "./FoodList/FoodListContainer";
import ShareFoodModalContainer from "./ShareFood/ShareFoodModalContainer";
import withAuth from "../../../HOCs/withAuth";

const FoodShare = () => {
    return (
        <div>
            <Cover />
            <FoodListContainer />
            <ShareFoodModalContainer />
        </div>
    );
};

export default withAuth(FoodShare);
