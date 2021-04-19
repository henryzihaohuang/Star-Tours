import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LoadingSpinner from "./LoadingSpinner";
import { fetchCharacters, addFavoriteCharacter } from "../../utils/swapiUtil";

function CharacterList() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetchCharacters().then((data) =>
      setPeople(
        data.map((character, idx) => ({
          ...character,
          id: idx + 1,
        }))
      )
    );
  }, []);

  const handleAddFavorite = (characterIdx) => {
    addFavoriteCharacter({ character_id: characterIdx });
  };

  if (!people) return <LoadingSpinner />;

  const shuffle = (peopleArray) => {
    let currentIndex = peopleArray.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = peopleArray[currentIndex];
      peopleArray[currentIndex] = peopleArray[randomIndex];
      peopleArray[randomIndex] = temporaryValue;
    }
    return peopleArray;
  };

  return (
    <Row className="character-list-container">
      <Col className="character-list-subcontainer">
        <span className="character-list-header">
          Add your favorite characters:
        </span>
        {shuffle(people).map((characterCard, idx) => (
          <div key={`${idx}-block`} className="character-card-block">
            <span key={idx} className="character-list-element">
              <Link
                to={{
                    pathname: '/character/:character_id',
                    characterId: characterCard.id}
               }
              >
                <div key={`${idx}-name`} className="character-list-name">
                  {characterCard.name}
                </div>
              </Link>
              <div
                key={`${idx}-add`}
                className="character-list-add"
                onClick={() => handleAddFavorite(characterCard.id)}
              >
                +
              </div>
            </span>
            <div className="character-list-item-bio">
              <span key={`${idx}-id`}>Id: {characterCard.id}</span>
              <span key={`${idx}-gender`}> Gender: {characterCard.gender}</span>
              <span key={`${idx}-birth`}>
                Birth year: {characterCard.birth_year}
              </span>
              <span key={`${idx}-skin`}>
                Skin color: {characterCard.skin_color}
              </span>
              <span key={`${idx}-hair`}>
                Hair color: {characterCard.hair_color}
              </span>
              <span key={`${idx}-height`}>
                Height: {characterCard.height} cm
              </span>
              <span key={`${idx}-eye`}>
                Eye color: {characterCard.eye_color}
              </span>
              <span key={`${idx}-weight`}>Weight: {characterCard.mass} kg</span>
            </div>
          </div>
        ))}
      </Col>
    </Row>
  );
}
export default CharacterList;
