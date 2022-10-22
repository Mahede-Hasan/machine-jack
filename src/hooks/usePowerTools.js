import { useEffect, useState } from "react";

const usePowerTools = () => {
    const [powerTools, setPowerTools] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/powertools')
            .then(res => res.json())
            .then(data => {
                setPowerTools(data);
            })
    }, [])
    return [powerTools];
}

export default usePowerTools;