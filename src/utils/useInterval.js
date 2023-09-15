import React,{useEffect,useLayoutEffect,useRef} from 'react'

export const useInterval = (callbackFunction,delay) => {
    const savedCallback = useRef(callbackFunction);
    useLayoutEffect(() => {
        savedCallback.current = callbackFunction;
    },[callbackFunction])
    useEffect(() => {
        if(!delay && delay !== 0){
            return;
        }
        const id = setInterval(() => savedCallback.current(),delay)
        return () => clearInterval(id);
    },[delay])
}
