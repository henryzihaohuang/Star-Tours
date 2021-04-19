import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LoadingSpinner from '../dashboard/LoadingSpinner';
import { fetchShowCharacter } from '../../utils/swapiUtil';

function Character({characterId}){
    const [people, setPeople] = useState([]) 

    useEffect(() => {
        fetchShowCharacter(characterId).then(data => setPeople(data.map((character) => ({
            character
        }))))
    }, [])

    if (!people) return <LoadingSpinner />;
    return(
        <Row className="character-list-container">
            <Col className="character-list-subcontainer">
            <span className="character-list-header">
                Add your favorite characters:
            </span>
            { people.map((characterCard, idx) => (
                <div key={`${idx}-block`} className="character-card-block">
                    <span key={idx} className="character-list-element">
                        <div key={`${idx}-name`} className="character-list-name">{characterCard.name} </div>
                        <div key={`${idx}-add`} className="character-list-add" onClick={() => handleAddFavorite(characterCard.id)}>+</div>
                    </span>
                    <div className="character-list-item-bio">
                        <span key={`${idx}-id`}>Id: {characterCard.id}</span>
                        <span key={`${idx}-gender`}> Gender: {characterCard.gender}</span>
                        <span key={`${idx}-birth`}> Birth year: {characterCard.birth_year}</span>
                        <span key={`${idx}-skin`}> Skin color: {characterCard.skin_color}</span>
                        <span key={`${idx}-hair`}> Hair color: {characterCard.hair_color}</span>
                        <span key={`${idx}-height`}> Height: {characterCard.height} cm</span>
                        <span key={`${idx}-eye`}> Eye color: {characterCard.eye_color}</span>
                        <span key={`${idx}-weight`}> Weight: {characterCard.mass} kg</span>
                    </div>
                </div>
                ))
            }
            </Col>
        </Row>
    )
}
export default Character;