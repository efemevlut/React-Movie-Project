import { useContext } from "react";
import { Card } from "../Card";
import { MovieContext } from "../../pages/Movie";
import { StyledCardList } from "./CardList.style";

export const CardList = () => {
  const { movieList, baseImageUrl } = useContext(MovieContext);
  return (
    <StyledCardList>
      {movieList?.map((movie, index) => (
        <Card
          key={index}
          title={movie.title}
          imgSrc={movie.poster_path ? baseImageUrl + movie.poster_path : null}
        />
      ))}
    </StyledCardList>
  );
};
