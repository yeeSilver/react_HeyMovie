// 리액트에서 훅스를 만들때는 use~ 이런식으로 파일명 해야 함.
// 검색한 단어가 0.5초 이후에 debouceValue 스테이트로 들어감.(연속으로 타자를 치면 0.5초 후에 인풋값에 있는 밸류가 debounceValue로 들어가는 것이라서, 한 글자씩 들어가는 게 아니라, 한 단어씩 들어갈 수 있음.)

import { useState, useEffect } from "react";

export const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => { 
    const handler = setTimeout(() => {
      setDebounceValue(value)}, delay);
    return () => {
      clearTimeout(handler) //핸들러 초기화(delay시간이나 value를 초기화) 
    };
  }, [value, delay]) // value나 delay가 바뀌면 다시 useEffect를 호출.

  return debounceValue;
}