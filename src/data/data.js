import * as R from 'ramda'


export const formatJSON = data => {
    let result;
    if (data) {
        result = Object.keys(data).map(key => {
            return {
                id: key,
                ...data[key]
            }
        });
    } else {
        result = []
    }
    return result;
};


export const filterByPostId = (postId) => (data) => {
    return R.filter(item => item.postId === postId, data)
};



