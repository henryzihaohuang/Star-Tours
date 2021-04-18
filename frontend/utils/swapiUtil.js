export const characters = [
  "http://swapi.dev/api/people/1/",
  "http://swapi.dev/api/people/2/",
  "http://swapi.dev/api/people/3/",
  "http://swapi.dev/api/people/4/",
  "http://swapi.dev/api/people/5/",
  "http://swapi.dev/api/people/6/",
  "http://swapi.dev/api/people/7/",
  "http://swapi.dev/api/people/8/",
  "http://swapi.dev/api/people/9/",
  "http://swapi.dev/api/people/10/",
];

export const fetchCharacters = async () => {
    try {
      const characterInfo = await Promise.all(
        characters.map(characterUrl => fetch(characterUrl).then(data => data.json()))
      );
      console.log(characterInfo);
      return characterInfo;
    } catch (error) {
      console.log('Error: could not load character information', error);
    }
};