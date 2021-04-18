import React, {useEffect, useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LoadingSpinner from './LoadingSpinner';
import { fetchCharacters } from '../../utils/swapiUtil';

function CharacterList (){
    const [people, setPeople] = useState([])  

    useEffect(() => {
        fetchCharacters().then(data => setPeople(data))
    }, [])

    if (!people) return <LoadingSpinner />;
    const shuffle = (peopleArray) => {
        let currentIndex = peopleArray.length, temporaryValue, randomIndex;
    
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
    
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
    
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
    
        return peopleArray;
    };

    return(
        <div>
            { shuffle(people).map((characterCard, idx) => (<span key={idx}>{characterCard}</span>)) }
        </div>
    )


}
export default CharacterList;