import React from "react";

// IMPORT STYLES AND ANIMATIONS
import styled from "styled-components";
import { motion } from "framer-motion";

import { useSelector } from "react-redux";
import { gameDetailsUrl } from "../api";

// IMPORT LOCATION
import { useNavigate } from "react-router-dom";

function GameDetail() {
  const navigate = useNavigate();
  // HANDLERS
  const exitDetailHandler = (e) => {
    const element = e.target;
    console.log(element);

    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      navigate("/");
    }
  };
  const { screen, game, isLoading } = useSelector((state) => state.detail);
  return (
    <>
      {!isLoading && (
        <CardShadowContainer className="shadow" onClick={exitDetailHandler}>
          <DetailContainer>
            <StatsContainer>
              <RatingContainer>
                <h3>{game.name}</h3>
                <p>Rating: {game.rating}</p>
              </RatingContainer>
              <InfoContainer>
                <h3>Platforms</h3>
                <PlatformContainer>
                  {game.platforms?.map((data) => (
                    <p key={data.platform.id}>{data.platform.name}</p>
                  ))}
                </PlatformContainer>
              </InfoContainer>
            </StatsContainer>
            <MediaContainer>
              <img src={game.background_image} alt="Game Art" />
            </MediaContainer>
            <DescrptionContainer>
              <p>{game.description_raw}</p>
            </DescrptionContainer>
            <GalleryContainer>
              {screen.results?.map((screen) => (
                <img src={screen.image} key={screen.id} alt="Game Gallery" />
              ))}
            </GalleryContainer>
          </DetailContainer>
        </CardShadowContainer>
      )}
    </>
  );
}

const CardShadowContainer = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.2rem;
  }
  &::-webkit-slider-thumb {
    background-color: lightgrey;
  }
  &::-webkit-scrollbar-track {
    background-color: #ffffff;
  }
`;

const DetailContainer = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 2rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  img {
    width: 100%;
  }
`;

const StatsContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const InfoContainer = styled(motion.div)`
  text-align: center;
  h3 {
    font-size: 1rem;
  }
`;

const PlatformContainer = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  p {
    line-height: normal;
    font-size: 0.8rem;
    padding: 0.5rem;
  }
  img {
    margin-left: 3rem;
  }
`;

const RatingContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  h3,
  p {
    font-size: 1rem;
  }
`;

const MediaContainer = styled(motion.div)`
  margin: 1.5rem 0rem;
`;

const DescrptionContainer = styled(motion.div)`
  margin-bottom: 1.5rem;
`;

const GalleryContainer = styled(motion.div)`
  img {
    padding: 0.5rem 0rem;
  }
`;

export default GameDetail;
