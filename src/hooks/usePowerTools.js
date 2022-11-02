import { useEffect, useState } from "react";

const usePowerTools = () => {
    const [powerTools, setPowerTools] = useState([]);
    useEffect(() => {
        fetch('https://machine-jack-server.onrender.com')
            .then(res => res.json())
            .then(data => {
                setPowerTools(data);
            })
    }, [])
    return [powerTools];
}

export default usePowerTools;