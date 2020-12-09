import {Card} from "../Card";
import {StyledCardList} from "./CardList.style"

export const CardList = ({movieList, baseImageUrl}) => {
  
    return (
        <StyledCardList>
           {movieList?.map(
               (movie, index) => (
               <Card 
                key={index} 
                title={movie.title}
                imgSrc={movie.poster_path ? baseImageUrl + movie.poster_path : null}
                />)
            )}
        </StyledCardList>
    )
}
