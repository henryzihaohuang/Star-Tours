const baseUrl = 'https://swapi.dev/api/'

export const fetchCharacter = (num) => {
    return $.ajax ({
        method: "GET",
        url: baseUrl + `people/${num}`
    })
}