import { useContext } from "react";
import {
  StyledCardWrapper,
  StyledText,
  StyledMovieImage,
  StyledHeader,
  StyledRightSide,
} from "./DetailCard.style";
import { DetailContext } from "../../pages/MovieDetails";

export const DetailCard = () => {
  const { baseImageUrl, movieDetails } = useContext(DetailContext);
  return (
    <StyledCardWrapper>
      {movieDetails?.poster_path ? (
        <StyledMovieImage
          src={baseImageUrl + movieDetails?.poster_path}
          alt={"Movie Poster"}
        />
      ) : (
        "No Image"
      )}
      <StyledRightSide>
        <StyledHeader>{movieDetails?.original_title}</StyledHeader>
        <StyledText>{movieDetails?.overview}</StyledText>
      </StyledRightSide>
    </StyledCardWrapper>
  );
};

