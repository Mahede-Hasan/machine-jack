import { useEffect, useState } from "react";

const useHandTools = ()=>{
const [handTools, setHandTools] = useState([]);
useEffect(()=>{
fetch('products/handTools.json')
.then(res=>res.json())
.then(data=>{
    setHandTools(data)
})
},[])
    return [handTools];
}

export default useHandTools;