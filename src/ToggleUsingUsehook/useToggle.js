import { useState } from "react";

export function useToggle(initialValue=false){
    const [on,setOn] = useState(initialValue);
    const toggle=()=>{
        setOn(prev => !prev);
    }
    return [on,toggle]
}