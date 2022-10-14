import { useEffect, useState } from "react";

const useBlower = ()=>{
const [blowers, setBlowers] = useState([]);
useEffect(()=>{
fetch('products/blower.json')
.then(res=>res.json())
.then(data=>{
    setBlowers(data)
})
},[])
    return [blowers];
}

export default useBlower;