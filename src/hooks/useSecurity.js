import { useEffect, useState } from "react"

const useSecurity = () => {
    const [securities, setSecurities] = useState([])
    useEffect(() => {
        fetch('products/securities.json')
            .then(res => res.json())
            .then(data => setSecurities(data))
    }, [])
    return [securities]
}

export default useSecurity;