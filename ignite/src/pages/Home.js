import React, { useEffect } from "react";
// REDUX
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";

// IMPORT COMPONENTS
import Game from "../components/Game";

// IMPORT STYLES AND ANIMATIONS
import styled from "styled-components";
import { motion } from "framer-motion";

function Home() {
  //Fetch Games
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  // EXTRACT DATA FROM STATE
  const { popular, newGames, upcoming } = useSelector((state) => state.games);
  return (
    <GamesListContainer>
      <h2>Upcoming Games</h2>
      <GamesContainer>
        {upcoming.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </GamesContainer>

      <h2>Popular Games</h2>
      <GamesContainer>
        {popular.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </GamesContainer>

      <h2>New Games</h2>
      <GamesContainer>
        {newGames.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </GamesContainer>
    </GamesListContainer>
  );
}

const GamesListContainer = styled(motion.div)`
  h2 {
    padding: 3rem 0rem;
  }
`;
const GamesContainer = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
