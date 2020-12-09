import {StyledCardWrapper, StyledText, StyledMovieImage} from "./Card.style"

export const Card = ({title, imgSrc}) => {
    return (
        <StyledCardWrapper>
            {imgSrc ? <StyledMovieImage src={imgSrc} alt={"Movie Poster"}/> : "No Image"}
            <StyledText>{title}</StyledText>
        </StyledCardWrapper>
    )
}