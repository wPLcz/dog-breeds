export const initialState = {
    data: [],
    images: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_DOGS_LIST_SUCCESS":
            const data = Object.keys(action.params.message);
            return {
                state,
                data,
            };
        case "FETCH_BREED_SUCCESS":
            const images = action.message;
            return {
                state,
                data: state.data,
                images,
            };
        default:
            return state;
    }
};

// action creators
export const actions = {
    fetchDogsList: () => ({type: "FETCH_DOGS_LIST"}),
    fetchDogsListSuccess: params => ({type: "FETCH_DOGS_LIST_SUCCESS", params}),
    fetchBreed: breed => ({type: "FETCH_BREED", breed}),
    fetchBreedSuccess: params => ({type: "FETCH_BREED_SUCCESS", ...params}),
};
