import { addFavoriteCharacter } from '../utils/swapiUtil';

export const RECEIVE_FAVORITE_CHARACTOR = "RECEIVE_FAVORITE_CHARACTOR";

export const receiveFavoriteCharacter = character => ({
    type: RECEIVE_FAVORITE_CHARACTOR,
    character
});

export const receiveErrors = errors => {
    return {
        type: RECEIVE_ERRORS,
        errors
    }
};

export const addFavorite = (character) => {
    const translatedCharacterData = {
        character_id: character.characterId
    }

    return (dispatch) => {
        return addFavoriteCharacter(translatedCharacterData)
            .then((favoriteCharacter) => dispatch(receiveFavoriteCharacter(favoriteCharacter)),
            (errors) => dispatch(receiveErrors(errors.responseJSON)));
    }
} 
