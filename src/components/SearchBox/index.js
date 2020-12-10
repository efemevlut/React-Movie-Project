import {useRef, useContext} from 'react';
import {MovieContext} from '../../pages/Movie';
import {StyledSearchBox, StyledSearchInput, StyledSearchButton} from "./SearchBox.style";

export const SearchBox = () => {
    const inputRef = useRef();
    const {setSearchKeyword} = useContext(MovieContext)
    return (
        <StyledSearchBox>
           <StyledSearchInput ref={inputRef}/>
           <StyledSearchButton onClick={()=>setSearchKeyword(inputRef?.current?.value)}>Search</StyledSearchButton> 
        </StyledSearchBox>
    )
}