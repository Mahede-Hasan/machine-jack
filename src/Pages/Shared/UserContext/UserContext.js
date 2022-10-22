import React, { createContext, useState } from 'react';


export const CartContext = createContext()
const UserContext = ({ children }) => {
    const [tools, setTools] = useState([]);

    return (
        <div>
            <CartContext.Provider value={[tools, setTools]}>
                {children}

            </CartContext.Provider>
        </div>
    );
};

export default UserContext;