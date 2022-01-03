const initialState = {
    favorites: [],
    myComments: [
        {
            userEmail: "testing@gmail.com",
            userComment: "i think this is a great movie"
        },
        {
            userEmail: "testing@gmail.com",
            userComment: "don't miss it"
        }
         
    ],
    rating:[]
}



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_COMMENT":
            return { ...state, myComments: [...state.myComments, action.payload] }
        case "TOGGLE_FAVORITE":
            let movie = action.payload
            let movieFromFav = state.favorites.find((favMovie) => movie.id === favMovie.id)
            return {
                ...state, favorites: movieFromFav ? [...state.favorites.filter((movie) => movie.id !== movieFromFav.id)]
                : [...state.favorites, action.payload]
            }
        case "TOGGLE_RATING":
            let rating = action.payload
            let ratingFromRate = state.rating.find((rated) => rating.id === rated.id)
            return {
                ...state, rating: ratingFromRate ? [...state.rating.filter((rate) => rate.id !== ratingFromRate.id)]
                : [...state.rating, action.payload]
            }
        default:
      return state;
    }
}

export default reducer;