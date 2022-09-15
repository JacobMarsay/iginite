import React from "react";
// STYLING AND ANIMATION
import styled from "styled-components";
import { motion } from "framer-motion";
// REDUX
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";

function Game({ name, released, image, id }) {
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetail(id));
  };
  return (
    <GameContainer onClick={loadDetailHandler}>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={image} alt={name} />
    </GameContainer>
  );
}

const GameContainer = styled.div`
  min-height: 30vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  border-radius: 1rem 1rem 0rem 0rem;

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
