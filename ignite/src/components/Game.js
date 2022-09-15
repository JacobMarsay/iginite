import React from "react";
// STYLING AND ANIMATION
import styled from "styled-components";
import { motion } from "framer-motion";
// REDUX
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";

import { Link } from "react-router-dom";

function Game({ name, released, image, id }) {
  const dispatch = useDispatch();

  //HANDLERS
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };
  return (
    <GameContainer onClick={loadDetailHandler}>
      <Link to={`/game/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <img src={image} alt={name} />
      </Link>
    </GameContainer>
  );
}

const GameContainer = styled.div`
  min-height: 30vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
  h3 {
    padding: 2rem;
  }
  p {
    padding-bottom: 2rem;
  }
`;
export default Game;
