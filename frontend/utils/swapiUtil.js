export const characters = [
  "http://swapi.co/api/people/1",
  "http://swapi.co/api/people/2",
  "http://swapi.co/api/people/3",
  "http://swapi.co/api/people/4",
  "http://swapi.co/api/people/5",
  "http://swapi.co/api/people/6",
  "http://swapi.co/api/people/7",
  "http://swapi.co/api/people/8",
  "http://swapi.co/api/people/9",
  "http://swapi.co/api/people/10",
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

//   export const fetchCharacters = () => {
//     debugger;
//     characters.map(characterUrl => {
//       return $.ajax({
//           method: 'GET',
//           url: `${characterUrl}`
//       });
//     });
// };