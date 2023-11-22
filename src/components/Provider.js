import React, { useState } from 'react';
import context from './context';
const Provider = (props) => {
    const [userDetails, setUserDetails] = useState({ name: "", authenticated: "" });
    return (
        <div>
            <context.Provider value={[userDetails, setUserDetails]} >
                {props.children}
            </context.Provider>
        </div>
    )
}

export default Provider;