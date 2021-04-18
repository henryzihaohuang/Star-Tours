import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LoadingSpinner from './LoadingSpinner';
import { fetchCharacters, addFavoriteCharacter, fetchFavoriteCharacters } from '../../utils/swapiUtil';

function CharacterList (){
    const [people, setPeople] = useState([]) 
    const [favoriteCharacters, setfavoriteCharacters] = useState([])

    useEffect(() => {
        fetchCharacters().then(data => setPeople(data))
        fetchFavoriteCharacters().then(favs=>setfavoriteCharacters(favs))
    }, [])


    const handleAddFavorite = () => {
        addFavoriteCharacter({character_id: 1})
    }

    if (!people) return <LoadingSpinner />;
    const shuffle = (peopleArray) => {
        let currentIndex = peopleArray.length, temporaryValue, randomIndex;
    
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
    
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
    
            // And swap it with the current element.
            temporaryValue = peopleArray[currentIndex];
            peopleArray[currentIndex] = peopleArray[randomIndex];
            peopleArray[randomIndex] = temporaryValue;
        }
    
        return peopleArray;
    };

    return(
        <div>
            { shuffle(people).map((characterCard, idx) => (<span key={idx} >{characterCard.name}</span>)) }

            <div onClick={handleAddFavorite}>+</div>
        </div>
    )


}
export default CharacterList;