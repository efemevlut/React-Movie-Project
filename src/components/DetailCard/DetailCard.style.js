import styled from "styled-components";

export const StyledCardWrapper = styled.div`
    width: 100%;
    height: auto;
    border: 0.0625rem solid rgba(0,0,0,0.2);
    border-radius: 5px;
    box-shadow: 0.1875rem 0.125rem 0.625rem rgba(0,0,0,0.1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* gap: 2rem; */
    flex-direction: row;
    margin-top: 2rem;
    box-sizing: border-box;
`;

export const StyledRightSide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 2rem;
    width: 70%;
    
`;
export const StyledHeader = styled.h1`
    color: #fb8c00;
    font-size: 1rem;
    margin: 0;
    text-align: center;
`;
export const StyledText = styled.p`
    color: #343A40;
    font-size: 1rem;
    margin: 0;
    text-align: center;
`;

export const StyledMovieImage = styled.img`
    width: 30%;
    height: auto;
    margin: 1rem;
    
`