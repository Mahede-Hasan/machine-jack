import { useEffect, useState } from "react"

const useGrinder = ()=>{
    const [grinders, setGrinders] = useState([])
    useEffect(()=>{
        fetch('products/grinders.json')
        .then(res=>res.json())
        .then(data =>{
            setGrinders(data)
        })
    },[])
    return [grinders]
}

export default useGrinder;