import {useHistory} from 'react-router-dom';
import {StyledCardWrapper, StyledText, StyledMovieImage} from "./Card.style"

export const Card = ({title, imgSrc, id}) => {
    const history = useHistory();
    return (
        <StyledCardWrapper onClick={()=>history.push(`/detail/${id}`)}>
            {imgSrc ? <StyledMovieImage src={imgSrc} alt={"Movie Poster"}/> : "No Image"}
            <StyledText>{title}</StyledText>
        </StyledCardWrapper>
    )
}