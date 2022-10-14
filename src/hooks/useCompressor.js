import { useEffect, useState } from "react"

const useCompressor = ()=>{
    const [compressors, setCompressors] = useState([])
    useEffect(()=>{
        fetch('products/compressor.json')
        .then(res => res.json())
        .then(data=>setCompressors(data))
    },[])

    return[compressors]
}

export default useCompressor;