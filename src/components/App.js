import React, { useContext, useState } from 'react';
import context from './context';

const App = () => {

    const [item, setItem] = useState("");
    const [list, setList] = useState([]);
    const [userDetails, setUserDetails] = useContext(context);

    function removeItem(index) {
        let updatedList = [];
        list.map((element, i) => {
            if (i !== index)
                updatedList.push(element);
        });
        setList(updatedList);
    }

    function add() {
        setList([...list, item]);
        setItem("");
    }


    return (
        <div>
            {
                userDetails.authenticated && <p id="current-user">Current user:{userDetails.name}, isAuthenticated: {userDetails.authenticated}</p>
            }
            <button id="login-btn" onClick={() => { setUserDetails({ name: "vishal", authenticated: "Yes" }) }} >Login</button>
            <button id="signout" onClick={() => { setUserDetails({ name: "", authenticated: "" }) }} >Signout</button>
            <input type="text" id="shopping-input" placeholder="Item" value={item} onChange={(e) => { setItem(e.target.value) }} ></input>
            <button onClick={add} >Add</button>
            <button id='clear-list' onClick={() => { setList([]) }} >Clear List</button>
            {
                list.length > 0 &&
                <ul>
                    {
                        list.map((item, index) =>
                            <li id={`item-${item}`} key={`item-${item}`}>
                                {item}
                                <button id={`remove-${item}`} onClick={() => { removeItem(index) }} >Remove</button>
                            </li>)
                    }
                </ul>
            }
        </div>
    );
};

export default App;