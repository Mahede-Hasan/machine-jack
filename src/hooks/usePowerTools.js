import { useEffect, useState } from "react";

const usePowerTools = ()=>{
const [powerTools, setPowerTools] = useState([]);
useEffect(()=>{
fetch('products/powerTools.json')
.then(res=>res.json())
.then(data=>{
    setPowerTools(data)
})
},[])
    return [powerTools];
}

export default usePowerTools;