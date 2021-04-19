import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LoadingSpinner from '../dashboard/LoadingSpinner';
import { fetchShowCharacter } from '../../utils/swapiUtil';
import Profile from '../dashboard/Profile';

function Character(props){
    const [people, setPeople] = useState([]) 
    console.log(props.match.params['character'])

    useEffect(() => {
        fetchShowCharacter(props.match.params['character']).then(data => setPeople([data])) 
    }, [])

    if (!people) return <LoadingSpinner />;
    return(
        <div className="character-show-container">

            <Link to="/people">
              <img src="https://i.ibb.co/2t6w5Tk/new-story-assessment-logo.png" alt="star-tours-logo" style={{width:'100px'}}/>
            </Link>

            <div>
                <Profile />
            </div>

            <div>
                <Row className="character-list-container">
                    <Col className="character-list-subcontainer">
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
            </div>
        </div>
    )
};
export default Character;