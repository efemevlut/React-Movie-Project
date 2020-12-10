import { useRef, useContext } from "react";
import { MovieContext } from "../../pages/Movie";
import {
  StyledSearchBox,
  StyledSearchInput,
  StyledSearchButton,
} from "./SearchBox.style";

export const SearchBox = () => {
  const inputRef = useRef();
  const clickRef = useRef();
  const { setSearchKeyword } = useContext(MovieContext);

    const keyUp = (e) => e.key ==="Enter" ? clickRef.current.click() : null
        
    const setSearchFunc = () => {
        return(
            setSearchKeyword(inputRef?.current?.value)   
        )
    };

  return (
    <StyledSearchBox>
      <StyledSearchInput ref={inputRef} onKeyUp={keyUp}/>
      <StyledSearchButton
        onClick={setSearchFunc}
        ref={clickRef}
      >
        Search
      </StyledSearchButton>
    </StyledSearchBox>
  );
};
