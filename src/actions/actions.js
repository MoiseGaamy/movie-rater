export const addComment = (newComment) => {
    return {
        type: "ADD_COMMENT",
        payload: newComment
    };
}

export const toggleFavorite = (movie) => {
    return {
        type: "TOGGLE_FAVORITE",
        payload: movie
    }
}

export const toggleRating = (ratings) => {
    return {
        type: "TOGGLE_RATING",
        payload: ratings
    }
}