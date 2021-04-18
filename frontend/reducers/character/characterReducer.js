import { RECEIVE_FAVORITE_CHARACTER } from '../../actions/characterActions';

const characterReducer = (store, action) => {
    Object.freeze(store);
    switch (action.type) {
        case RECEIVE_FAVORITE_CHARACTER:
            return Object.assign({}, { favorites: [...store.favorites, action.character] });
        default:
            return store;
    }
};

export default characterReducer;