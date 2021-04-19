import React from 'react';
import { useSelector } from "react-redux";
import { fetchFavoriteCharacters } from "../../utils/swapiUtil";

function Favorites (){
  const currentUser = useSelector((state) => state.session.currentUser);
  const [favoriteCharacters, setfavoriteCharacters] = useState([]);

  useEffect(() => {
    fetchFavoriteCharacters().then((favs) => {
      setfavoriteCharacters(favs);
    });
  }, []);

  
    return (
        <div>

        </div>
    )
};

export default Favorites;
